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

/////Complex example Anonymous and arrow functio--

let Data =[10,20,30,40,50];

//Anonymous

let NewData= Data.map(function(item){
    return item*2;
    });
    console.warn(NewData);

//arrow function

let NewDataArrow = Data.map((item)=>item*2);

console.warn(NewDataArrow);