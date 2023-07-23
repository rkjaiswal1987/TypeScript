function Add(x, y) {
    if (typeof (x) == 'number' && typeof (y) == 'number') {
        return x + y;
    }
    else {
        return x + "  " + y;
    }
}
var result1 = Add(2, 3);
console.log(result1);
var result2 = Add('Hi', 'Raj');
console.log(result2);
