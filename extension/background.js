// https://developer.chrome.com/docs/extensions/reference/
// https://developer.chrome.com/docs/extensions/reference/action/#method-getTitle
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
    });
});
