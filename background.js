chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if(tab.url.match(/^https:\/\/github\.com.*/)) {
    chrome.pageAction.show(tabId);
  }
});

chrome.pageAction.onClicked.addListener(function(){
  chrome.tabs.executeScript(null, {
    file: "execute.js"
  });
});
