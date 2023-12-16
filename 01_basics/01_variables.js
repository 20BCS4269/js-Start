const accountId = 144553
let accountEmail = "abhishek@google.com"
var accountPassword = "12345"
accountCity = "Chandigarh"

// accountId = 2 // not allowed

accountEmail = "aj@aj.com"
accountPassword = "212121"
accountCity = "Patna"
let accountState = "Punjab"

console.log(accountId);

/*
prefer not to use var
bacause of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])