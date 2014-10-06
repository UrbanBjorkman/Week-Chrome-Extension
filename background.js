(function ($) {

    Date.prototype.getWeek = function () {
        var onejan = new Date(this.getFullYear(), 0, 1);
        return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    }


    $(function () {
        setBadge();
        setInterval(function () {
            setBadge();
        }, 5000)

        
    });
})(jQuery);


function setBadge() {
    var weekNumber = (new Date()).getWeek().toString();
    chrome.browserAction.setBadgeText({ text: weekNumber });
}