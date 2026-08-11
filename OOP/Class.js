"use strict";
class Employeepractice {
    names;
    id;
    constructor(names, id) {
        this.names = names;
        this.id = id;
    }
}
//  Object Create 
let emp2 = new Employeepractice("Bisma", 101);
console.log(emp2.names);
console.log(emp2.id);
