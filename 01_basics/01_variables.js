const accountId = 14556
let accountEmail = "ujjwal@google.com"
var accountPassword = "123456"
accountCity = "Jaipur"

// accountId = 19669 not allowed

accountEmail = "hitesh@google.com"
accountPassword = "222888"
accountCity = "Bengaluru"
let accountState;

/*
Prefer not to use var
because of issue in block and functional scope
*/
console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
