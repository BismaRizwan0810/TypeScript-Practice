interface  Customer 
{
    name:string;
    accountnumber:number;
    balance:number;
}

class BankCustomer implements Customer{
    name:string;
    accountnumber:number;
    balance:number;

 constructor(name:string,accountnumber:number,balance:number)
 {
        this.name=name;
        this.accountnumber=accountnumber;
        this.balance=balance;

 }
}
let C1 = new BankCustomer("Bisma",100010010100101,200);
console.log(C1.name);