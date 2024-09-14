
//const isLogedIn = true;

//if (isLogedIn) {
//    console.log("Welcome to our weddite.");
//} else {
//    console.log("Please login..."); 
//}

// const wings = true;

// if(wings) {
//     console.log(`You have power to fly now`);
// } else {
//     console.log(`You don't have power to fly...`);   
// }

// const balance = 1000;

// if(balance < 500) {
//     console.log(`balance is less than 500`);
// } else if(balance < 750) {
//     console.log(`balance is less than 750`);
// } else {
//     console.log(`balance is less than 1250`);
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy products");
// }

// -------------------------------------------------------------------

// const key = 1;

// switch(key) {
//     case 1:
//         console.log(`your key is ${key}`);
//         break;
//     case 2:
//         console.log(`your key is ${key}`);
//         break;
//     default:
//         console.log(`your key is miss matched`);
//         break;
// }

// ------------------------------------------------------------

// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing operator 

// let dataBase_responce1, dataBase_responce2, dataBase_responce3, dataBase_responce4;

// dataBase_responce1 = 5 ?? 7;
// console.log(`data base responce is: ${dataBase_responce1}`); // output: 5

// dataBase_responce2 = null ?? 16;
// console.log(`data base responce is: ${dataBase_responce2}`); // output: 16

// dataBase_responce3 = undefined ?? 108;
// console.log(`data base responce is: ${dataBase_responce3}`); // output: 108

// dataBase_responce4 = null ?? 2 ?? 4;
// console.log(`data base responce is: ${dataBase_responce4}`); // output: 2

// ----------------------------------------------------------------------------

// Terniary Operator

let a = 10;
const b = 16;

let c = (a > b) ? a : b; // here c is not constant

console.log(`greatest value: ${c}`);
console.log(typeof(c)); // output: number

