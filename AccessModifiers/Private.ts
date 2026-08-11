class BankAccount {
    private balance:number;
    constructor(balance:number)
    {
        this.balance=balance;
    }
    getBalance()
    {
        return this.balance;
    }
}
let acc1 = new BankAccount(1000);
console.log(acc1.getBalance());
