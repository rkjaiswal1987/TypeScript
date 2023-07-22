function AddNumbers(x, y, z) {
    if (z === void 0) { z = ''; }
    if (typeof x == "number" && typeof y == "number" && typeof z == "number") {
        return x + y + z;
    }
    else if (typeof x == "number" && typeof y == "number") {
        return x + y;
    }
    else {
        return x + y + z;
    }
}
var r1 = AddNumbers(2, 3);
console.log(r1);
var r2 = AddNumbers(2, 3, 5);
console.log(r2);
var r3 = AddNumbers('Hello ', 'Raj');
console.log(r3);
