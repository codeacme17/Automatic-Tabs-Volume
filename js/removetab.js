import { updateTabMuted, getAllAudibleTabs, isMuted } from "./util.js";

async function removeTab() {
  let allAudibleTabs = await getAllAudibleTabs();

  let isAllTabsBeMuted = allAudibleTabs.every((singleTab) => {
    return isMuted(singleTab);
  });

  if (isAllTabsBeMuted && allAudibleTabs.length) {
    updateTabMuted(allAudibleTabs[allAudibleTabs.length - 1].id, false);
  }
}

export default removeTab;
