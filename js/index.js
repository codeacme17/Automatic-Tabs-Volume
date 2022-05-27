chrome.tabs.onActivated.addListener((activeInfo) => move(activeInfo));

function move(activeInfo) {
  let allTabs;
  chrome.tabs.query({}, function (tabs) {
    allTabs = tabs;
  });
  chrome.tabs.get(activeInfo.tabId, (info) => {
    toggleMuteState(info, allTabs);
  });
}

function toggleMuteState(tab, allTabs) {
  if (tab.audible) {
    allTabs.forEach((singleTab) => {
      if (singleTab.id === tab.id) {
        chrome.tabs.update(tab.id, { muted: false });
      } else {
        chrome.tabs.update(singleTab.id, { muted: true });
      }
    });
  } else {
    chrome.tabs.update(tab.id, { muted: false });
  }
}

chrome.tabs.onRemoved.addListener(() => {
  chrome.tabs.query({}, function (tabs) {
    let set = new Set();
    tabs.forEach((singleTab) => {
      if (singleTab.audible) {
        set.add(singleTab.id);
      }
    });
    let audibleTabs = [...set.values()];
    if (audibleTabs.length == 1) {
      chrome.tabs.update(audibleTabs[0], { muted: false });
    }
  });
});
