
// alert(2 + 2); // ReferenceError: alert is not defined

console.log("HARE KRISHNA");


let name = "KRISHNA";
let age = 18;
let isLoggedIn = true;
let city; // undefined
let id = null; // object

// console.table([name, age, isLoggedIn, city]);

// console.table([typeof name, typeof age, typeof isLoggedIn, typeof city]);

// console.table([
//     {value: name, type:typeof name},
//     {value: age, type:typeof age},
//     {value: isLoggedIn, type:typeof isLoggedIn},
//     {value: city, type:typeof city},
//     {value: id, type:typeof id},
// ])

// ----

// PRIMITIVE dataType. stored in a STACK
// it gives a copy of variable 

// 1. number => 2^53
// 2. bigint
// 3. string => ""
// 4. boolean => true/false
// 5. null => standalone value
// 6. undefined 
// 7. symbol => unique and immutable, used to identify object


// Non Primitive dataType. stored in HEAP
// it gives reference of variable 

// 1. array
// 2. objects
// 3. function

// ----

// const registerId1 = Symbol("111");
// const registerId2 = Symbol("111");

// console.log(registerId1 === registerId2);

// ----

// const bigNumber = 3456543576654356754n; // use 'n' at end for bigInt
// const bigNum = BigInt(123456789987654321)
// console.log(bigNumber);
// console.log(bigNum);

// ----

// const fruits = ["mango", "orange", "tomato", "blue-beary"]

// console.log(fruits);


// const student = {
//     id: 16,
//     name: "KRISHNA",
//     age: 16
// }

// console.log(student);
// console.log(typeof(student));


const myFunction = function() {
    console.log("HAREKRISHNA".includes("HARE"));
}

myFunction();
console.log(typeof myFunction);
