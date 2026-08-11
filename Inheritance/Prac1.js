"use strict";
class Employees {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class Manager extends Employees {
    department;
    constructor(name, id, department) {
        super(name, id);
        this.department = department;
    }
}
let m1 = new Manager("ALI", 101, "IT");
console.log(m1.name);
console.log(m1.id);
console.log(m1.department);
