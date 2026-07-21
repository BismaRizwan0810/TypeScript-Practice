function withdrawamount(balance1:number,withdraw1:number)
{
    if(withdraw1>balance1)
    {
        console.log("Insufficient Balance ");
        return balance1;

    }

    else
    {
        let Fee:number=50;
        let FinalBalance:number=balance1-withdraw1-Fee;
        return FinalBalance;
    }
}
let remaining:number = withdrawamount(10000,500);
console.log(remaining);