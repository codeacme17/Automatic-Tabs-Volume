function updateTabMuted(tabId, isMuted) {
  chrome.tabs.update(tabId, { muted: isMuted });
}

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

function isMuted(tabInfo) {
  if (tabInfo.mutedInfo.muted) return true;
  else return false;
}

export {
  updateTabMuted,
  getAllTabs,
  getAllAudibleTabs,
  getTabInfoByID,
  getCurrentTab,
  isMuted,
};
