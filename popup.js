window.onload = function () {
    chrome.storage.local.get(['active'], function (result) { // get variable from chrome.storage
        document.getElementById("active").checked = result.active;
    });

    $(document).ready(function () {

        $('#active').click(function () { // when checkbox 'streamsNotify' is clicked
            let checked = $(this).is(':checked'); // save status of checkbox in variable checked
            chrome.storage.local.set({'active': checked}, function () { // save status of variable checked in chrome.storage
            });
            chrome.runtime.sendMessage({type: "update"});
        });
    });


}