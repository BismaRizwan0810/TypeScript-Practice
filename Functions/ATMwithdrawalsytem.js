"use strict";
function withdrawamount(balance1, withdraw1) {
    if (withdraw1 > balance1) {
        console.log("Insufficient Balance ");
        return balance1;
    }
    else {
        let Fee = 50;
        let FinalBalance = balance1 - withdraw1 - Fee;
        return FinalBalance;
    }
}
let remaining = withdrawamount(10000, 500);
console.log(remaining);
