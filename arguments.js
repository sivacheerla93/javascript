function argDemo() {
    // JavaScript arguments object example:
    function printArguments() {
        document.write("Number of arguments = " + arguments.length + "<br/>")
        for (var i = 0; i < arguments.length; i++) {
            document.write("Argument " + i + " = " + arguments[i] + "<br/>");
        }
        document.write("<br/>");
    }

    printArguments();
    printArguments("A", "B");
    printArguments(10, 20, 30);




    // Is it possible to pass variable number of arguments to a JavaScript function
    //Yes, you can pass as many arguments as you want to any javascript function. All the parameters will be stored in the arguments object.

    function addNumbers() {
        var sum = 0;
        document.write("Count of numbers = " + arguments.length + "<br/>")
        for (var i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
        document.write("Sum of numbers = " + sum);
        document.write("<br/><br/>");
    }

    addNumbers();
    addNumbers(10, 20, 30);




    //Converting JavaScript arguments object to an array
    function numbers() {
        var argsArray = Array.prototype.slice.call(arguments);
        argsArray.sort();
        document.write(argsArray);
    }

    numbers(50, 20, 40 + "<br/>");



    // Converting JavaScript arguments object to an array using array literals
    function numbers() {
        var argsArray = [].slice.call(arguments);
        argsArray.sort();
        document.write(argsArray);
    }

    numbers(50, 20, 40);
}