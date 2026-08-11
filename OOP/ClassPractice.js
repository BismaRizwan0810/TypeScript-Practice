"use strict";
class Department {
    Departmentname;
    EmployeeCount;
    constructor(Departmentname, EmployeeCount) {
        this.Departmentname = Departmentname;
        this.EmployeeCount = EmployeeCount;
    }
}
let D1 = new Department("Computer Science", 25);
console.log(D1.Departmentname);
console.log(D1.EmployeeCount);
