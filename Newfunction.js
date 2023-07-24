//Name Function
console.log(add(2, 3));
function add(x, y) {
    return x * y;
}
//Anonymous Function
var Sum = function (x, y) {
    return x * y;
};
console.log(Sum(2, 3));
//Arrow Function
var Addition = function (x, y) {
    return x * y;
};
console.log(Addition(2, 3));
/////Complex example Anonymous and arrow functio--
var Data = [10, 20, 30, 40, 50];
//Anonymous
var NewData = Data.map(function (item) {
    return item * 2;
});
console.warn(NewData);
//arrow function
var NewDataArrow = Data.map(function (item) { return item * 2; });
console.warn(NewDataArrow);
