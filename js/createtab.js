import { updateTabMuted } from "./util.js";

export default function creatTab(tab) {
  let currentTab;
  chrome.tabs.getCurrent((tab) => {
    currentTab = tab;
  });
  // chrome.tabs.query({ currentWindow: true }, function (tabs) {
  //   console.log(currentTab);
  //   let time = 0;
  //   let canMute = false;
  //   let timer = setInterval(() => {
  //     if (tab.audible && currentTab.id == tab.id) {
  //       tabs.forEach((singleTab) => {
  //         if (singleTab.id === tab.id) {
  //           updateTabMuted(tab.id, false);
  //           canMute = true;
  //         } else {
  //           updateTabMuted(singleTab.id, true);
  //         }
  //       });
  //     }
  //     time += 1;
  //     if (time == 9 || canMute) clearInterval(timer);
  //   }, 1000);
  // });
}
