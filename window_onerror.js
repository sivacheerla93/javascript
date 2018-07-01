function windowOnError(params) {
    window.onerror = function (msg, url, line) {
        alert("message: " + msg + "\n" + "url: " + url + "\n" + "line: " + line);
        return true;
    }
    NotExistingFunction();
}