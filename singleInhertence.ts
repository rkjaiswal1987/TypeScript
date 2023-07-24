class Human
{
    protected name:string;
}
class Manager extends Human
{
    id:number;
    constructor (_id :number,_name :string)
    {
        super();
        this.id=_id;
        this.name=_name;
    }
    show(){
        console.log(`id:${this.id} , Name:${this.name}`)
    }
}
const m= new Manager(1,'Jaiswal');
m.show();