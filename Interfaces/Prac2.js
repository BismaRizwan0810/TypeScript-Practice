"use strict";
class BankCustomer {
    name;
    accountnumber;
    balance;
    constructor(name, accountnumber, balance) {
        this.name = name;
        this.accountnumber = accountnumber;
        this.balance = balance;
    }
}
let C1 = new BankCustomer("Bisma", 100010010100101, 200);
console.log(C1.name);
