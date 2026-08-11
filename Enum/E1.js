"use strict";
var AccountStatus;
(function (AccountStatus) {
    AccountStatus[AccountStatus["Active"] = 0] = "Active";
    AccountStatus[AccountStatus["Inactive"] = 1] = "Inactive";
    AccountStatus[AccountStatus["Blocked"] = 2] = "Blocked";
})(AccountStatus || (AccountStatus = {}));
let customerStatus = AccountStatus.Blocked;
if (customerStatus === AccountStatus.Blocked) {
    console.log("Transaction Denied");
}
