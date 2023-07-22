function doReverse2<T>(list:T[]):T[]
{
let revLst : T[]=[];
for(let i=(list.length-1);i>=0;i--)
{
    revLst.push(list[i]);
}
return revLst;
}
let MyLetters =['a','b','r','d','j'];
let RevMyLetters = doReverse2<string>(MyLetters);
console.log(RevMyLetters);
