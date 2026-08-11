class Employee{
    public name:string;

    constructor(name:string)
    {
        this.name=name;
    }
}

let emp1 = new Employee("Bisma");
console.log(emp1.name);