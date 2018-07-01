function ternaryOperators() {
    var input = document.getElementById("monthNumber").value;

    if (isNaN(input)) {
        alert("Month number is not valid! Please enter in the range(1-12)!!");
        return;
    }

    var month = input == 1 ? "January" : input == 2 ? "February" : input == 3 ? "Marach" : input == 4 ? "April" : input == 5 ? "May" : input == 6 ? "June" :
        input == 7 ? "July" : input == 8 ? "August" : input == 9 ? "September" : input == 10 ? "October" : input == 11 ? "November" : input == 12 ? "December" :
            "Month number not valid!";

    alert("Your month name is: " + month);
}