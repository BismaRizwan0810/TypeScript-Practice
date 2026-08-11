"use strict";
class Employee {
    name;
    employeeid;
    salary;
    constructor(name, employeeid, salary) {
        this.name = name;
        this.employeeid = employeeid;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class Manager extends Employee {
    department;
    constructor(name, employeeid, salary, department) {
        super(name, employeeid, salary);
        this.department = department;
    }
}
class Department {
    departmentname;
    employeecount;
    constructor(departmentname, employeecount) {
        this.departmentname = departmentname;
        this.employeecount = employeecount;
    }
}
class DataStore {
    data;
    constructor(data) {
        this.data = data;
    }
}
let e1 = new Employee("Ali", 101, 5000);
let m1 = new Manager("Ahmed", 201, 8000, "IT");
let d1 = new Department("InformationTechnology", 25);
let Employeestore = new DataStore(e1);
let Departmentstore = new DataStore(d1);
console.log("Employee name ", e1.name);
console.log("Manager name", m1.name);
console.log("Department name", d1.departmentname);
console.log("Salary", e1.getSalary());
