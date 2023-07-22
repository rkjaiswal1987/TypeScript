function doReverse<T>(arr:T[]):T[]{

    let revList:T[]=[];
    for(let i= (arr.length-1);i>=0;i--){
revList.push(arr[i]);
    }
    return revList;
}
let letters=['a','b','c','d','e']
let reversedLetters =doReverse<string>(letters);
console.log(reversedLetters);

let numbers=[1,2,3,4,5];
let reversedNumber=doReverse<number>(numbers);
console.log(reversedNumber);