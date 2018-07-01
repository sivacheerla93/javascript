function timeIntervalFunc(params) {
    setInterval(getCurrentDateTime, 1000);

    function getCurrentDateTime(params) {
        document.getElementById("timeInterval").innerHTML = new Date();
    }
}

// Intervals using start and stop
var intervalID;
function startClock() {
    intervalID = setInterval(getDateTime, 1000);
}

function stopClock(params) {
    clearInterval(intervalID);
}
function getDateTime(params) {
    document.getElementById("startStopInterval").innerHTML = new Date();
}


// Timer
var intervalTime;
function startTimer(controlId) {
    var control = document.getElementById(controlId);
    var seconds = control.value;
    seconds = seconds - 1;
    if (seconds == 0) {
        control.value = "Done";
        return;
    } else {
        control.value = seconds;
    }
    intervalTime = setTimeout(function (params) {
        startTimer('timerTxt');

    }, 1000);
}
function stopTimer(params) {
    clearTimeout(intervalTime);
}