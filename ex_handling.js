function exHandling(params) {
    try {
        document.write(sayHello())
    }
    catch (e) {
        document.write("Message = " + e.message + "<br/>");
        document.write("Description = " + e.description + "<br/>");
        document.write("Stack trace = " + e.stack + "<br/>");
    }
    finally {
        document.write("This can be executed from finally block!!");
    }
}