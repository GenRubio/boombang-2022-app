require('./bootstrap');
var outdatedBrowserRework = require('outdated-browser-rework');
var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf(' electron/') == -1) {
    location.href = "https://www.google.com/";
}
const ViewHandler = require('./view-handler');
ViewHandler.init({
    outdatedBrowserRework: outdatedBrowserRework,
});
