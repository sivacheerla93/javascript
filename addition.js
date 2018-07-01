// 3. ADDING NUMBERS WITH VALIDATIONS
function addNumbers() {
    var firstnumber = document.getElementById("addFirst").value;
    var secondnumber = document.getElementById("addSecond").value;
    if (firstnumber == "") {
        alert("Enter first number!!");
        return;
    }
    if (secondnumber == "") {
        alert("Enter second number!!");
        return;
    }
    firstnumber = parseFloat(firstnumber);
    secondnumber = parseFloat(secondnumber);
    if (isNaN(firstnumber)) {
        alert("First number is not valid!");
        return;
    }
    if (isNaN(secondnumber)) {
        alert("Second number is not valid!");
        return;
    }
    document.getElementById("addResult").value = firstnumber + secondnumber;
}
