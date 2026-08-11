class Department {
    Departmentname: string;
    EmployeeCount: number;

    constructor(Departmentname: string, EmployeeCount: number) {
        this.Departmentname = Departmentname;
        this.EmployeeCount = EmployeeCount;
    }
}

let D1 = new Department("Computer Science", 25);

console.log(D1.Departmentname);
console.log(D1.EmployeeCount);