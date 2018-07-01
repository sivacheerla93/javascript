function functionDemo() {
    // Normal function
    function addNumbers(firstNumber, secondNumber) { // this is hoisted means functions declaring with names can called first!
        var result = firstNumber + secondNumber;
        return result;
    }

    var sum = addNumbers(10, 20, 30, 40);
    document.write(sum + "<br/>");

    // Anonymous function, this isn't hoisted!
    var add = function (firstNumber, secondNumber) {
        var result = firstNumber + secondNumber;
        return result;
    }

    var sum = add(10, 20);
    document.write(sum + "<br/>");

    // Named function expression
    var factorial = function computeFactorial(number) {
        if (number <= 1) {
            return 1;
        }

        return number * computeFactorial(number - 1);
    }

    var result = factorial(5); // call with variable
    document.write(result + "<br/>");

    // Self invoked function
    var result = (function computeFactorial(number) {
        if (number <= 1) {
            return 1;
        }

        return number * computeFactorial(number - 1);
    })(5);   // self calling value

    document.write(result + "<br/>");



    // Recursive function
    function factorial(n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    document.write(factorial(5));
}