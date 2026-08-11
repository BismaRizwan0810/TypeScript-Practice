interface Account
{
    accountnumber:number;
    balance:number;
}

class SavingAccounts implements Account
{
    accountnumber:number;
    balance:number;
    constructor(accountnumber:number, balance:number)
    {
        this.accountnumber=accountnumber;
        this.balance=balance;
    }
}

let a1 = new SavingAccounts(1001,10000);
console.log(a1.accountnumber);
console.log(a1.balance);