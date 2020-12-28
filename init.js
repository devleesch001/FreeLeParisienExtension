window.onload = function () {
    chrome.storage.local.get(['active'], function (result) {
        if (result.active == null) {
            chrome.storage.local.set({'active': true}, function () {
            });
        }
    });
};