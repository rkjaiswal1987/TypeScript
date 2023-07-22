function AddNumbers(x:number,y:number):number;
function AddNumbers(x:number,y:number,z:number):number;
function AddNumbers(x:string ,y:string):string;

function AddNumbers (x:any,y:any,z:any=''):any{
if(typeof x=="number" && typeof y=="number" && typeof z=="number"){
    return x+y+z;
}
else if(typeof x=="number" && typeof y=="number" ){
    return x+y;
}
else{
    return x+y+z;
}
}

let r1 =AddNumbers(2,3);
console.log(r1);

let r2 =AddNumbers(2,3,5);
console.log(r2);

let r3 =AddNumbers('Hello ', 'Raj');
console.log(r3);



