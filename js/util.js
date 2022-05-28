async function getAllTabs() {
  return await chrome.tabs.query({ currentWindow: true });
}

async function getAllAudibleTabs() {
  return await chrome.tabs.query({ currentWindow: true, audible: true });
}

async function getTabInfoByID(tabId) {
  return await chrome.tabs.get(tabId);
}

async function getCurrentTab() {
  let curList = await chrome.tabs.query({ active: true });
  return curList[0];
}

function updateTabMuted(tabId, isMuted) {
  chrome.tabs.update(tabId, { muted: isMuted });
}

function isMuted(tabInfo) {
  if (tabInfo.mutedInfo.muted) return true;
  else return false;
}

function muteOtherTabs(tabInfo, allTabs) {
  allTabs.forEach((singleTab) => {
    if (tabInfo.audible) {
      if (singleTab.id === tabInfo.id) {
        updateTabMuted(tabInfo.id, false);
      } else {
        updateTabMuted(singleTab.id, true);
      }
    }
  });
}

export {
  getAllTabs,
  getAllAudibleTabs,
  getTabInfoByID,
  getCurrentTab,
  updateTabMuted,
  isMuted,
  muteOtherTabs,
};
