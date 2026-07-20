let balanceamount: number =20000;
let withdrawalamount: number =10000;
let newbalance: number = balanceamount-withdrawalamount;
if(withdrawalamount<=balanceamount)
{
    console.log(withdrawalamount);
    console.log(newbalance);
}
else
{
    console.log("Insufficient Balance");
}
