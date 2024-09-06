chrome.action.onClicked.addListener(e=>{chrome.tabs.sendMessage(e.id,{message:"Hello from extension"})});
