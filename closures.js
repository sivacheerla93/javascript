function closuresDemo() {
    function addNumbers(firstNumber, secondNumber) {
        var returnValue = "Result is : ";
        // This inner function has access to the outer function's variables & parameters
        function add() {
            return returnValue + (firstNumber + secondNumber);
        }
        return add();
    }

    var result = addNumbers(10, 20);

    document.write(result + "<br/>");





    //The following code Returns the inner function expression
    function addNumbers(firstNumber, secondNumber) {
        var returnValue = "Result is : ";
        function add() {
            return returnValue + (firstNumber + secondNumber);
        }
        // We removed the parentheses. This will return the
        // inner function expression without executing it.
        return add;
    }

    // addFunc will contain add() function (inner function) expression.
    var addFunc = addNumbers(10, 20);
    // call the addFunc() function and store the return value in result variable
    var result = addFunc();

    document.write(result + "<br/>");




    //Returning and executing the inner function
    function addNumbers(firstNumber, secondNumber) {
        var returnValue = "Result is : ";
        function add() {
            return returnValue + (firstNumber + secondNumber);
        }
        // We removed the parentheses. This will return the
        // inner function add() expression without executing it.
        return add;
    }

    // This returns add() function (inner function) definition
    // and executes it. Notice the additonal parentheses.
    var result = addNumbers(10, 20)();

    document.write(result + "<br/>");
}