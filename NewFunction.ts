//Name Function
console.log(add(2,3));

function add(x:number,y:number):number{
    return x*y;
}

//Anonymous Function

const Sum=function(x:number,y:number):number{
    return x*y;
}

console.log(Sum(2,3));

//Arrow Function

const Addition=(x:number,y:number):number=>{
    return x*y;
}

console.log(Addition(2,3));