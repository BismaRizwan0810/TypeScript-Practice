"use strict";
let balanceamount = 20000;
let withdrawalamount = 10000;
let newbalance = balanceamount - withdrawalamount;
if (withdrawalamount <= balanceamount) {
    console.log(withdrawalamount);
    console.log(newbalance);
}
else {
    console.log("Insufficient Balance");
}
