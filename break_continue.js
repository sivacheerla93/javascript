// Break statement
function breakSt() {
    var input = document.getElementById("breakStatement").value;
    var start = 0;

    while (start <= input) {
        document.write(start + "<br\>");
        start += 2;

        if (start > 100)
            break;
    }
}

// Continue statement
function continueSt() {
    var start = 0;
    while (start < 10) {
        start += 1;
        if (start % 2 == 0) {
            continue;
        }
        document.write(start + "<br\>");
    }
}