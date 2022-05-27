chrome.tabs.onActivated.addListener((activeTab) => switchTab(activeTab));

function updateTabMuted(tabId, isMuted) {
  chrome.tabs.update(tabId, { muted: isMuted });
}

function toggleMuteState(tab, allTabs) {
  if (tab.audible) {
    allTabs.forEach((singleTab) => {
      if (singleTab.id === tab.id) {
        updateTabMuted(tab.id, false);
      } else {
        updateTabMuted(singleTab.id, true);
      }
    });
  } else {
    updateTabMuted(tab.id, false);
  }
}

function switchTab(activeTab) {
  chrome.tabs.query({ currentWindow: true }, function (tabs) {
    chrome.tabs.get(activeTab.tabId, (info) => {
      toggleMuteState(info, tabs);
    });
  });
}

chrome.tabs.onRemoved.addListener(() => {
  chrome.tabs.query({ currentWindow: true }, function (tabs) {
    const set = new Set();
    tabs.forEach((singleTab) => {
      if (singleTab.audible) {
        set.add(singleTab.id);
      }
    });
    let audibleTabs = [...set.values()];
    if (audibleTabs.length == 1) {
      updateTabMuted(audibleTabs[0], false);
    }
  });
});

chrome.tabs.onCreated.addListener((tab) => {
  chrome.tabs.query({ currentWindow: true }, function (tabs) {
    toggleMuteState(tab, tabs);
  });
});
