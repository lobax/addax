browser.browserAction.onClicked.addListener( (tab) => { 
  console.log("Clicked filter in tab " + tab.id); 
  browser.tabs.sendMessage(tab.id, {action: "filter"}); 
});


