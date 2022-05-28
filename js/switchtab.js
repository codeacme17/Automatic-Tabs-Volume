import { getAllAudibleTabs, getTabInfoByID, muteOtherTabs } from "./util.js";

async function switchTab(activeTab) {
  let allAudibleTabs = await getAllAudibleTabs();
  let tabInfo = await getTabInfoByID(activeTab.tabId);
  muteOtherTabs(tabInfo, allAudibleTabs);
}

export default switchTab;
