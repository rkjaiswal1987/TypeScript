class user{
    name:string;
    address:string;
    constructor (n:string,a:string){
        this.name=n;
        this.address=a;
    }
// ShowDetails=()=>{
//     console.log(`Name:${this.name},Address:${this.address}`);
//     setTimeout(() => {
//     console.log(`Name:${this.name},Address:${this.address}`);
//     },1000);
//     }
ShowDetails=function(){
    console.log(`Name:${this.name},Address:${this.address}`);
    // setTimeout(function() {
        setTimeout(() => {
    console.log(`Name:${this.name},Address:${this.address}`);
    },1000);
    }
}
const obj= new user('Mohan','Noida')
obj.ShowDetails();