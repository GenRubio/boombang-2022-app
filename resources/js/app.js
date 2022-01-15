require('./bootstrap');
var outdatedBrowserRework = require('outdated-browser-rework');
const ViewHandler = require('./view-handler');
ViewHandler.init({
    outdatedBrowserRework: outdatedBrowserRework,
});
