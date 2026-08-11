"use strict";
class SavingAccounts {
    accountnumber;
    balance;
    constructor(accountnumber, balance) {
        this.accountnumber = accountnumber;
        this.balance = balance;
    }
}
let a1 = new SavingAccounts(1001, 10000);
console.log(a1.accountnumber);
console.log(a1.balance);
