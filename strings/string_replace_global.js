function strReplace2() {
    var a = "A Blue bottle has blue ink on blue table!";
    var b = a.replace(/blue/g, "green");
    alert(b);

    //Global insensitive!
    var c = a.replace(/blue/gi, "green");
    alert(c);
}