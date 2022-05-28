import {
  getTabInfoByID,
  getCurrentTab,
  getAllAudibleTabs,
  muteOtherTabs,
} from "./util.js";

async function creatTab(newTab) {
  let currebtTab = await getCurrentTab();
  let allAudibleTabs = await getAllAudibleTabs();

  if (currebtTab.id === newTab.id) {
    let time = 0;
    let timer = setInterval(async () => {
      if (time > 9) clearInterval(timer);
      let newTabInfo = await getTabInfoByID(newTab.id);
      if (newTabInfo.audible) {
        clearInterval(timer);
        muteOtherTabs(newTabInfo, allAudibleTabs);
      } else {
        time += 1;
      }
    }, 1000);
  }
}

export default creatTab;
