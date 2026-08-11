interface EmployeeDetails
{
    name:string;
    employeeid:number;
}
class Employee implements EmployeeDetails
{
    public name:string;
    public employeeid:number;
    private salary:number;

    constructor(name:string,employeeid:number,salary:number)
    {
        this.name=name;
        this.employeeid=employeeid;
        this.salary=salary;
    }
    getSalary()
    {
        return this.salary;
    }
}

class Manager extends Employee{
    department:string;
    constructor(name:string,employeeid:number,salary:number,department:string)
    {
        super(name,employeeid,salary);
        this.department=department;
        
    }

}

class Department {
            departmentname:string;
            employeecount:number;
    constructor(departmentname:string,employeecount:number)
    {
           this.departmentname = departmentname;
           this.employeecount = employeecount;
    }
}

class DataStore<T>{
    data:T;
    constructor (data:T)
    {
        this.data=data;
    }
   
}

let e1= new Employee("Ali",101,5000);
let m1= new Manager("Ahmed",201,8000,"IT");
let d1= new  Department("InformationTechnology",25);
let Employeestore = new DataStore<Employee>(e1);
let Departmentstore= new DataStore<Department>(d1);



console.log("Employee name ",e1.name);
console.log("Manager name", m1.name);
console.log("Department name",d1.departmentname);
console.log("Salary",e1.getSalary());