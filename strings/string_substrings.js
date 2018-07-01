// Using substring() method
function subString1() {
    var str = "Hello JavaScript";
    result = str.substring(0, 5); // If the second param is smaller than first, the result is also same!
    alert("This is the substring with substring() method: " + result);
}

// Using substr() method
function subStr1() {
    var str = "Hello Siva Cheerla";
    result = str.substr(1, 10);   // second param is counter, if the counter is not specified we can get string upto an end!
    alert("This is the substring using substr() method: " + result);
}

// Using slice() method
// substring() and slice() are almost same except slice() doesn't swap values if second param is smaller!
function sliceStr() {
    var str = "Java Tutorial";
    result = str.slice(2, 10);
    alert("This is the substring using slice() method: " + result);
}

// Using indexOf() method
function strIndex() {
    var n = "Siva Cheerla";
    result = n.indexOf("e");
    alert("The postion of a character using indexOf() method is: " + result);
}