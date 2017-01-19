var usernameBox    = $("#username");
var passwordBox    = $("#password");
var userIdBox      = $("#id_num");
var form           = $(".sheilta-login form");

var savedUsername;
var savedPassword;
var savedId;
var autoSubmit;

chrome.storage.sync.get(['OPUsername', 'OPPassword', 'OPId', 'autoSubmit'], function(data){
    if(!chrome.runtime.error) {
        savedUsername   = data["OPUsername"];
        savedPassword   = data["OPPassword"];
        savedId         = data["OPId"];
        autoSubmit      = data["autoSubmit"];
    } else {
        console.error(chrome.runtime.error);
    }
});

$(document).ready(function(){
    if(savedUsername && savedPassword && savedId) {
        usernameBox.val(savedUsername);
        passwordBox.val(savedPassword);
        userIdBox.val(savedId);
        if(autoSubmit) {
            form.submit();
        }
    } else {
        console.error("no details on memory");
    }
});
