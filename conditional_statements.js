function ifElse() {
    var input = Number(prompt("Enter a number", ""));

    if (input == "") {
        alert("Please enter a number!");
        return;
    }

    if (input == 1) {
        alert("Your number is One!");
    }
    else if (input == 2) {
        alert("Your number is Two!");
    }
    else if (input == 3) {
        alert("Your number is Three!")
    }
    else {
        alert("Your number isn't in range of 1 & 3!");
    }
}

// Swich statement
function switchSt() {
    var input = Number(prompt("Enter a number", ""));
    switch (input) {
        case 1:
            alert("Your number is One!");
            break;
        case 2:
            alert("Your number is Two!");
            break;
        case 3:
            alert("Your number is Three!");
            break;

        default:
            alert("Your number not in the range of 1 and 3!");
            break;
    }
}