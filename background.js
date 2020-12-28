disableETP();

chrome.runtime.onMessage.addListener(function () {
    chrome.storage.local.get(['active'], function (result) { // get variable from chrome.storage
        console.log(result.active);
    });
    disableETP();
});

function disableETP() {
    chrome.storage.local.get(['active'], function (result) { // get variable from chrome.storage
        if (result.active) {
            chrome.webRequest.onBeforeRequest.addListener(
                function (details) {
                    return {cancel: true};
                },
                {urls: ["*://experience.tinypass.com/*"]},
                ["blocking"]
            );
        }
    });
}