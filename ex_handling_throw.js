function exHandlingThrow(params) {
    var numerator = prompt("Enter numerator: ");
    var denominator = prompt("Enter denominator: ");
    try {
        if (denominator == 0) {
            throw {
                error: "Denominator error",
                message: "Denominator can't be zero",
                description: "Please enter any other number, other than zero"
            }
        } else {
            document.write("The result is: " + (numerator / denominator) + "<br/>");
        }
    } catch (e) {
        document.write("Error = " + e.error + "<br/>");
        document.write("Message = " + e.message + "<br/>");
        document.write("Description = " + e.description + "<br/>");
    } finally {
        document.write("This is the result from finally block: " + (numerator / denominator) + "<br/>");
    }
}