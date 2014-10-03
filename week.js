(function ($) {

    Date.prototype.getWeek = function () {
        var onejan = new Date(this.getFullYear(), 0, 1);
        return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    }



    $(function() {

        var weekNumber = (new Date()).getWeek();
        var d = weekNumber;
        $("#v").text(d);
    });
})(jQuery);