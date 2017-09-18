define(function() {
    return {
        getDateString: function(time) {
            var date = new Date(time);
            date.setHours(date.getHours() + 8);
            var strDate = date.getFullYear() + "/" + (addZero(date.getMonth()) + 1) + "/" + addZero(date.getDate()) + " " + addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());
            return strDate;
        },
        numberToPercent: function (num) {
            num *= 100;
            return addZero(num.toFixed(2)) + '%';
        }
    }

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
});
