// content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  alert(`${request.message} from ext`);

  if (request.message === "Hello from popup") {
    document.body.style.backgroundColor = "yellow";
    sendResponse({ status: "Background color changed to yellow" });
  }
});

console.log("Content script running on");
