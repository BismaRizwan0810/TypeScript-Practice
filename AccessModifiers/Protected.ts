class Employee{
    protected id:number;
    constructor(id:number){
        this.id=id;
    }
}

class Manager extends Employee{
    showID()
    {
        console.log(this.id);
    }
}