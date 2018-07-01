// 2. EVEN OR ODD NUMBER
function IsEven() {
    var n = document.getElementById("evenodd").value;
    if (n == "") {
        alert("Number is required!");
        return;
    }
    if (Number(n)) {
        if (n % 2 == 0) {
            alert(n + " is a even number!");
        }
        else {
            alert(n + " is a odd number!");
        }
    }
    else {
        alert("Please enter valid number!");
    }
}
