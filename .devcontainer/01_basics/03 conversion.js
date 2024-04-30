let score = "33 abc"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let scor = null
console.log(typeof scor);

let valueInNumbr = Number(scor)
console.log(typeof valueInNumbr);
console.log(valueInNumbr);

// if we convert 33 then it will be converted in 33 but when we convert 33abc then it gives the output NaN(not a number)
// nut the type of NaN is number
// true => 1, false=> 0


// let isLoggedIn = true
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
