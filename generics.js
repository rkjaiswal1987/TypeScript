function doReverse(arr) {
    var revList = [];
    for (var i = (arr.length - 1); i >= 0; i--) {
        revList.push(arr[i]);
    }
    return revList;
}
var letters = ['a', 'b', 'c', 'd', 'e'];
var reversedLetters = doReverse(letters);
console.log(reversedLetters);
var numbers = [1, 2, 3, 4, 5];
var reversedNumber = doReverse(numbers);
console.log(reversedNumber);
