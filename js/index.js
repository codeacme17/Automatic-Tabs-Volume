import switchTab from "./switchtab.js";
import removeTab from "./removetab.js";
import createTab from "./createtab.js";

chrome.tabs.onActivated.addListener((activeTab) => switchTab(activeTab));
chrome.tabs.onRemoved.addListener(() => removeTab());
chrome.tabs.onCreated.addListener((tab) => createTab(tab));
