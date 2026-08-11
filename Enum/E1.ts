enum AccountStatus {
    Active,
    Inactive,
    Blocked
}
let customerStatus = AccountStatus.Blocked;
if (customerStatus === AccountStatus.Blocked) {
    console.log("Transaction Denied");
}