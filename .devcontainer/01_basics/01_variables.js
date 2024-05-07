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
// name = "Rahul"
// age = 24
// console.log(name,age);
// isFollow = false;

// name = 25;
// console.log(name);
// _class = 25;
// console.log(_class);

let name = "Rahul";
const Name = "Rahul";
var nam = "Rahul";
console.log(name, Name, nam);

// always use let or const for variable declaration
// never use var for variable declaration

// let and const are block scoped
// var is function scoped

// let and const are not hoisted

// var is hoisted

// let and const are not redeclared

// var is redeclared
// let and const are not reinitialized

// var is reinitialized
const PI = 3.14;
console.log(PI);
let a;
console.log(a);
{
    let a= 5
    console.log(a);
}
{
    let a=6
    console.log(a);
}
// we can only change the value of const but not redeclare or reinitialize it for redeclaring it we need to use another block {}.
