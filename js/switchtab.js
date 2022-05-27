import { updateTabMuted, getAllAudibleTabs, getTabInfoByID } from "./util.js";

async function switchTab(activeTab) {
  let allAudibleTabs = await getAllAudibleTabs();
  let tabInfo = await getTabInfoByID(activeTab.tabId);
  toggleMutedState(tabInfo, allAudibleTabs);
}

function toggleMutedState(tabInfo, allTabs) {
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

export default switchTab;
