
// alert(2 + 2); // ReferenceError: alert is not defined

console.log("HARE KRISHNA");


let name = "KRISHNA";
let age = 18;
let isLoggedIn = true;
let city; // undefined
let id = null; // object

// console.table([name, age, isLoggedIn, city]);

// console.table([typeof name, typeof age, typeof isLoggedIn, typeof city]);

console.table([
    {value: name, type:typeof name},
    {value: age, type:typeof age},
    {value: isLoggedIn, type:typeof isLoggedIn},
    {value: city, type:typeof city},
    {value: id, type:typeof id},
])


// PRIMITIVE dataType

// 1. number => 2^53
// 2. bigint
// 3. string => ""
// 4. boolean => true/false
// 5. null => standalone value
// 6. undefined 
// 7. symbol => unique


// Non Primitive dataType

// 1. array
// 2. object
// 3. function
// 4. date

