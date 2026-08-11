class Employees {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

class Manager extends Employees {
    department: string;

    constructor(name: string, id: number, department: string) {
        super(name, id);
        this.department = department;
    }
}

let m1 = new Manager("ALI", 101, "IT");

console.log(m1.name);
console.log(m1.id);
console.log(m1.department);