function doReverse2(list) {
    var revLst = [];
    for (var i = (list.length - 1); i >= 0; i--) {
        revLst.push(list[i]);
    }
    return revLst;
}
var MyLetters = ['a', 'b', 'r', 'd', 'j'];
var RevMyLetters = doReverse2(MyLetters);
console.log(RevMyLetters);
