chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.create({ 
url: "index.html"
 });
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.create({ url: "https://dekuy.com/"});
 
});


if(chrome.runtime.setUninstallURL) {
  chrome.runtime.setUninstallURL('https://dekuy.com/');
} else {
}