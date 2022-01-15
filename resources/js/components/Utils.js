const Utils = {
    checkSection(selector) {
        return document.querySelectorAll(selector).length;
    },

    getUrl(){
        return window.location.pathname;
    }
};

module.exports = Utils;