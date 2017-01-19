$(document).ready(function () {
    chrome.storage.sync.get(['OPUsername', 'OPPassword', 'OPId', 'autoSubmit'], function (data) {
        if (!chrome.runtime.error) {
            $("#username").val(data["OPUsername"]);
            $("#password").val(data["OPPassword"]);
            $("#userId").val(data["OPId"]);
            $("#auto-submit").prop('checked', data["autoSubmit"]);
        }
    });

    $("#form").submit(function () {
        var myUsername  = $("#username").val();
        var myPassword  = $("#password").val();
        var MyUserId    = $("#userId").val();
        var autoSubmit  = $("#auto-submit").is(":checked");

        var myDetails = {};
        myDetails.OPUsername    = myUsername;
        myDetails.OPPassword    = myPassword;
        myDetails.OPId          = MyUserId;
        myDetails.autoSubmit    = autoSubmit;

        chrome.storage.sync.set(myDetails, function (error) {
            if (chrome.runtime.error) {
                console.log(error);
            }
        });
    });

    $("#remove").click(function () {
        if (confirm("האם למחוק את הנתונים השמורים?")) {
            chrome.storage.sync.remove(['OPUsername', 'OPPassword', 'OPId']);
            $("#username").val('');
            $("#password").val('');
            $("#userId").val('');
            $("#auto-submit").prop('checked', false);
        }
    });

    $("#link").click(function(){
        chrome.tabs.create({
            url: "https://sheilta.apps.openu.ac.il/pls/dmyopt2/sheilta.myop"
        })
    })
});
