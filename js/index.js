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
