function arrayNumbers() {
    var myArray = [];
    for (start = 0; start <= 5; start++) {
        myArray[start] = start * 2;
    }
    for (start = 0; start < myArray.length; start++) {
        document.write(myArray[start] + "<br/>");
    }
}

// Array operations
function arrayOperations() {
    var myArray = [1, 2, 3, 4, 5];
    document.write(myArray + "<br/>");

    myArray.push(6);
    document.write(myArray + "<br/>");

    myArray.unshift(0);
    document.write(myArray + "<br/>");

    myArray.pop();
    document.write(myArray + "<br/>");

    myArray.shift();
    document.write(myArray + "<br/>");

}

// Sorting an array in ascending and descending order!

function sortArray() {
    var ascendArray = [25, 75, 65, 85, 105]
    var descendArray = [25, 75, 65, 85, 105]
    ascendArray.sort(function (a, b) {
        return a - b                // prints in ascending order, for descending order return b - a
    });
    descendArray.sort(function (a, b) {
        return a - b                // prints in ascending order, for descending order return b - a
    }).reverse();
    document.write(ascendArray + "<br/>" + descendArray);
}

// Array splice() method for adding or removing elements
function spliceArray() {
    var myArray = [1, 2, 3, 6, 8]
    myArray.splice(2, 0, 25, 36);    // splice(Index, Delete_count, Add, Add)
    document.write(myArray);
}

// Array filter() method
function filterArray() {
    var myArray = [25, 30, 100, 85, 96, 120, 300, 255];
    function isEven(value, index, array) {     // callback function for filter method!
        return value % 2 == 0;
    }
    var result = myArray.filter(isEven);
    document.write(result)

    // removing duplicate strings using filter() method
    var nameArray = ["Siva", "Father", "Mother", "Brother", "Sister", "Siva", "Siva"];

    var result = nameArray.filter(function (value, index, array) {
        return array.indexOf(value) == index;
    });
    document.write("<br/>" + result);
}

// Addition of Two dimensional array
function dimArray() {
    var myArray = new Array(3);

    for (var i = 0; i < 3; i++) {
        myArray[i] = new Array(3);
    }
    var start = 1;
    for (var i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            myArray[i][j] = start;
            start = start + 1;
        }
    }
    for (var i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            document.write(myArray[i][j] + "&emsp;");
        }
        document.write("<br/>")
    }
    document.write("<br/>");
    document.write("&emsp;+");
    document.write("<br/>");
    document.write("<br/>");

    // Create the second 2 dimensional 3 X 3 array
    var myArray2 = new Array(3)

    for (i = 0; i < 3; i++)
        myArray2[i] = new Array(3)

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            start = start - 1;
            myArray2[i][j] = start;
        }
    }

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            document.write(myArray2[i][j] + "&emsp;");
        }
        document.write("<br/>");
    }

    document.write("<br/>");
    document.write("&emsp;=");
    document.write("<br/>");
    document.write("<br/>");

    // Create the third 2 dimensional 3 X 3 array
    var myArray3 = new Array(3)

    for (i = 0; i < 3; i++)
        myArray3[i] = new Array(3)

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            myArray3[i][j] = myArray[i][j] + myArray2[i][j];
        }
    }

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            document.write(myArray3[i][j] + "&emsp;");
        }
        document.write("<br/>");
    }

}