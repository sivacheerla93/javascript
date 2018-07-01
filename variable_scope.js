function varScope() {
    // A local variable can have the same name as a global variable
    var greeting = "This is from global Variable";

    function helloWorld() {
        var greeting = "This is from local variable";
        document.write(greeting + "<br/>");
    }

    // This line will modify the global greeting variable
    greeting += "!!!";

    helloWorld();

    document.write(greeting);
}