function dateTest(params) {
    var d = new Date();
    document.write(d + "<br/>");

    // To get date format
    var dob = new Date("August 15, 1993 12:45:00");
    document.write(dob + "<br/>");

    // Get month number
    var monthNumber = dob.getMonth();
    document.write(getMonthNameFromMonthNumber(monthNumber) + "<br/>");

    // Get month name from month number
    function getMonthNameFromMonthNumber(monthNumber) {
        var monthNames = [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];
        return monthNames[monthNumber];
    }
    // document.write(getMonthNameFromMonthNumber(monthNumber + "<br/>"));
    console.log(new Date());

    // Get week number and week name
    var day = dob.getDay();
    document.write(getWeekNameFromWeekNum(day) + "<br/>");

    function getWeekNameFromWeekNum(day) {
        weekNames = [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ];
        return weekNames[day];
    }

    // Getting date in some format!
    document.write(dob + "<br/>");
    document.write(formatDate(dob) + "<br/>");
    function formatDate(date) {
        var year = date.getFullYear();
        var month = date.getMonth();
        if (month < 10) {
            month = "0" + month;
        }
        var day = date.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        return day + "/" + month + "/" + year;
    }
}