"use strict";
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
}
let acc1 = new BankAccount(1000);
console.log(acc1.getBalance());
