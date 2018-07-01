// While loop
function whileNumbers() {
    var input = document.getElementById("whileNumber").value;
    var start = 0;

    while (start <= input) {
        document.write(start + "<br\>");
        start += 2;
    }
}

// Do While loop
function doWhileNumbers() {
    var userChoice = "";
    do {
        var input = Number(prompt("Enter a number! ", ""));
        var start = 0;

        while (start <= input) {
            document.write(start + "<br\>");
            start += 2;
        }
        do {
            userChoice = prompt("Do you want to continue(Yes/No): ").toUpperCase;
            if (userChoice != 'YES' && userChoice != 'NO') {
                alert("Enter valid option! i.e., Yes or No");
            }
        }
        while (userChoice != 'YES' && userChoice != 'NO')
    } while (userChoice == "YES")
}

// For loop
function forNumbers() {
    var input = Number(prompt("Enter a number: ", ""));
    for (start = 0; start <= input; start += 1) {
        document.write(start + "<br\>");
    }
}