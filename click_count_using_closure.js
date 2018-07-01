var incrementClickCount = (function () {
    var clickCount = 0;
    return function () {
        return ++clickCount;
    }
})();