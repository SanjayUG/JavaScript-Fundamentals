
const arr1 = [1, 2, 3, 4];
// const arr2 = ["ram", "KRISHNA", "HARE"];
// const arr3 = ["Ram", 16, true];

// console.table([arr1, arr2, arr3]);

const arr4 = new Array(5, 6, 7, 8, 9);

// console.log(arr4);
// console.log(typeof(arr4));

// console.log(typeof(arr1) === typeof(arr4)); // output: true

//----

// arr4.push(10);
// arr4.push(12);
// arr4.push(11);
// arr4.pop();

// console.log(arr4);

// arr4.unshift(11); // insert element at begining
// console.log(arr4);

// arr4.shift(); // removes last element
// console.log(arr4);

// ----

// console.log(arr4.includes(9));
// console.log(arr4.indexOf(9));

// ----

// console.log(arr4.join())
// console.log(arr4.join("_"))

// ----

// const arr4Slice = arr4.slice(2, 4); // do not modify the original array
//                                 // second value is not included
// console.log(arr4Slice);
// console.log(arr4);

// const arr4Splice = arr4.splice(2, 4); // it modify the original array ( removes it )
//                                 // second value is not included
// console.log(arr4Splice);
// console.log(arr4);

// -------------------------------------------------------------------------

const fruits = ["mango", "orange", "grapes", "apple"];
const veges = ["potato", "carrot", "radish", "beans"];

// fruits.push(veges);

// console.log(fruits);
// console.log(fruits[4][1]);

// const veg = fruits.concat(veges); // it dose not moidify the original array and returns a new array

// console.log(veg);

// ----

// spread operator

// const veg =[...fruits, ...veges];

// console.log(veg);

// ----

// const nums = [1, 2, 3, [4, 5, 6], 7, 8, [9, [10, [20, 40]]]];
// console.log(nums)
// console.log(nums.flat(Infinity));

// ----

// console.log(Array.isArray(["HAREKRISHNA", "HARERAMA"])); // output: true
// console.log(Array.isArray("HAREKRISHNA")); // output: false

// console.log(Array.from("HAREKRISHNA")); // output: ['H', 'A', 'R', 'E', K', 'R', 'I', 'S','H', 'N', 'A']
// console.log(Array.from({name: "HAREKRISHNA"})) // output: []

// ----

const a = 10, b = 20, c = 30, d = 40;

console.log(Array.of(a, b, c, d));
