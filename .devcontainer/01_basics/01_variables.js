const accountId = 144553
let accountEmail = "rk0472466@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// accountId = 2 // not allowed  just because it is constant and we can not change it or if we change it then the node will detect it and give the output that "TypeError"

accountEmail = "hc@hc.com"
accountPassword = "217617"
accountCity = "bengaluru"


/*
speciallly use const and let for constant value because var is outdated so whenever you want to assign a value then use const or let
 so prefer not to use var because of issue in block scope and functional scope.
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])