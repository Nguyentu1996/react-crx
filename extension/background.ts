// background.js
chrome.action.onClicked.addListener((tab) => {
  // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //   let activeTab = tabs[0];
  chrome.tabs.sendMessage(tab.id!, { message: "Hello from extension" });
  // });
});
