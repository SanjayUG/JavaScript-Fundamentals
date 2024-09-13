
// function chant() {
//     console.log("HARE");
//     console.log("KRISHNA");
//     console.log("HARE");
//     console.log("KRISHNA");
//     console.log("KRISHNA");
//     console.log("KRISHNA");
//     console.log("HARE");
//     console.log("HARE");
//     console.log("HARE");
//     console.log("RAMA");
//     console.log("HARE");
//     console.log("RAMA");
//     console.log("RAMA");
//     console.log("RAMA");
//     console.log("HARE");
//     console.log("HARE");
    
// }

// chant();

// function sum(num1, num2) {
//     return num1 + num2;
// }

// const result = sum(1, 2);
// console.log(result);

// ----

// function loginUser(username) {
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUser("KRISHNA"));
// console.log(loginUser(""));

// ----

// function firstnLastValue(num1, ...nums) {
//     console.log(`firstValue ${num1} and lastValue ${nums[nums.length - 1]}`);
    
//     return;
// }

// console.log(firstnLastValue(1, 2, 3, 8, 9, 16));

// ----

// const user = {
//     username: "KRISHNA",
//     price: 199
// }

// function handleUser(anyUser) {
//     console.log(`Username is ${anyUser.username} and price is ${anyUser.price}`);
// }

// handleUser(user)
// handleUser({
//     username: "RAM",
//     price: 200
// })

// ----

// const arr = [10, 20, 30, 40];

// function firstElement(anyArray) {
//     return anyArray[0];
// }

// console.log(firstElement(arr));
// console.log(firstElement([2, 3, 4, 7, 16, 16, 108]));

// ----------------------------------------------------------------

// console.log(this); //output: {}

// function foo() {
//     let username = "KRISHNA"
//     console.log(this.username);
// }

// // foo(); // output: undefined


// const funTest1 = function() {
//     let username = "KRISHNA"
//     console.log(this.username);
// }

// // funTest1(); // output: undefined

// const funTest2 = () => {
//     let username = "KRISHNA"
//     console.log(this.username);
// }

// // funTest2(); // output: undefined

// ----

// const sum = (a, b) => {
//     return a + b; // returns expelectly
// }

// const sum = (a, b) => a + b;

// const sum = (a, b) => (a + b); // returns implectly

// console.log(sum(1, 5));

// ----

// const name = () => ({userName: "KRISHNA"})

// console.log(name());
