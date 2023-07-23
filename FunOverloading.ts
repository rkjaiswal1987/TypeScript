function Add(x:number,y:number):number;
function Add (x:string,y:string):string;

function Add(x:any,y:any):any
{
if(typeof(x)=='number' && typeof(y)=='number')
{
return x+y;
}
else
{
return x +"  "+y;  

}
}

let result1 =Add(2,3);
console.log(result1);
let result2 =Add('Hi', 'Raj');
console.log(result2);

