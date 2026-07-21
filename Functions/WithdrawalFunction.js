"use strict";
function Withdrawal(withdraw, Balance) {
    return Balance - withdraw;
}
let Remainingamount = Withdrawal(100, 2000);
console.log(Remainingamount);
