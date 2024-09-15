
// for

//for (let i = 0; i <= 10; i++) {
//    const j = i;
//    if (j == 7) {
//        console.log("its talla(7) for reason");
//    }
//    console.log(j);
//}       

// ----

//for(let i = 1; i <= 10; i++) {
//    console.log(`Outer: ${i}`);
//    for(let j = 1; j <= 10; j++) {
//        console.log(`Inner: ${j}`);
//        console.log(i + '*' + j + ' = ' + i*j );
//    }
//    console.log("\n");
//
//}

// ----

//let coding_languages = ["C", "CPP", "Java", "JavaScript"];

//console.log(coding_languages.length);

//for(let i=0; i<coding_languages.length; i++) {
//    const element = coding_languages[i];
//    console.log(element);
//}

// ----

// break and continue

//for(let i=1; i<=10; i++) {
//    if(i==7) {
//        console.log(`talla ${i} detected`);
//        break;
//    }
//    console.log(`i: ${i}`);

//}

// ----

//for(let i=1; i<= 10; i++) {
//    if (i == 6) {
//        console.log(`6 found`);
//        continue;
//    }
//    console.log(`i: ${i}`);
                                   
//}

// -------------------------------------------------------------------

// while and do...while

//let i = 0;
//while(i<10) {
//    console.log(`index: ${i}`);
//    i = i + 2;
//}

// ----

//let fruits = ['mango', "orange", "pears"];

//let i = 0;
//while(i < fruits.length) {
//    console.log(`${fruits[i]}`);
//    i = i + 1;
//}

// ----

//let score = 11

//do {
//    console.log(`Score is ${score}`);
//    score++;
//}while(score <= 10);


// -------------------------------------------------------------------------------

// for...of

// ["", "", ""]
// [{}, {}, {}]

//const arr = [1, 2, 3, 4, 5];

//for(const num of arr) {
//    console.log(num);
//}

// ----

//const chant = "HARE KRISHNA";
//for(const char of chant) {
//    console.log(`${char}`);
//}

// ----

//const map = new Map();

//map.set('IN', "India");
//map.set('USA', "United States of America");
//map.set('Fr', "France");
//map.set('IN', "India");

//console.log(map);

//for(const [key, value] of map) {
//    console.log(key, ':-', value);
//}

// ----

// const myObject = {
//     obj1: 'pen',
//     obj2: 'pencil'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); // output: TypeError: myObject is not iterable
                
// }

// ------------------------------------------------------------------

// for...in

// const coding_languages = ["c", "cpp", "java", "javascript", "python"];

// for(const key in coding_languages) {
//     console.log(`${key}: ${coding_languages[key]}`);
    
// }

// ----

// const coding_languages = {
//     c: "C",
//     cpp: "C++",
//     java: "Java",
//     js: "JavaScript",
//     py: "Python"
// };

// for(const key in coding_languages) {
//     console.log(`Key: ${key} and Value: ${coding_languages[key]}`);
// }

// ----

// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('Fr', "France");
// map.set('IN', "India");

// for (const key in map) {
//     console.log(key); // output: blank, bcz: for...in loops over the enumerable properties of an object, but Map is not a plain object. It hold key-value pairs.
// }

// ---------------------------------------------------------------------

// forEach

// const coding_languages = ["c", "cpp", "java", "javascript", "python"];

// coding_languages.forEach(function(currValue, index, array) {  // callback function donot have name to the function 
//     console.log(`${currValue}, ${index}, ${array}`);
// })

// function indexOfValue(currValue, index) {
//     console.log(`${index}: ${currValue}`);
// }

// coding_languages.forEach(indexOfValue);

// ----

// const myCode = [
//     {
//         languageName: "c",
//         languageExtention: ".c"
//     },
//     {
//         languageName: "cpp",
//         languageExtention: ".cpp"
//     },
//     {
//         languageName: "java",
//         languageExtention: ".java"
//     },
//     {
//         languageName: "javaScript",
//         languageExtention: ".js"
//     },
//     {
//         languageName: "python",
//         languageExtention: ".py"
//     }
// ]

// const forEachIterator = (object) => {
//     console.log(object.languageName);
// }

// myCode.forEach(forEachIterator);


// const coding = ["c", "java", "cpp",  "python", "javascript"];

// const programing_language = coding.forEach((currValue) => { // forEach do not return any value
//     console.log(currValue);
//     // return currValue;  
// })

// console.log(programing_language);

// ----------------------------------------------------------------------------------

// filter

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const nums = myNums.filter( (n) => { // takes only the true condition
//     return n > 4;
// } )

// console.log(nums);

// or

// const nums = [];

// myNums.forEach( (n) => {
//     if (n > 4) {
//         nums.push(n)
//     }
// } )

// console.log(nums);

// ----

// const myCode = [
//     {
//         languageName: "c",
//         languageExtention: ".c",
//         fileSize: "10kb",
//         programUsed: 16
//     },
//     {
//         languageName: "cpp",
//         languageExtention: ".cpp",
//         fileSize: "10kb",
//         programUsed: 8
//     },
//     {
//         languageName: "java",
//         languageExtention: ".java",
//         fileSize: "10kb",
//         programUsed: 16
//     },
//     {
//         languageName: "javaScript",
//         languageExtention: ".js",
//         fileSize: "10kb",
//         programUsed: 24
//     },
//     {
//         languageName: "python",
//         languageExtention: ".py",
//         fileSize: "5kb",
//         programUsed: 2
//     }
// ];

// const codingLanguagesUsed = myCode.filter((code) => { // only prints true condition
//     return code.programUsed >= 10;
// })

// console.log(codingLanguagesUsed);

// ------------------------------------------------------------------------

// map

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { // map = forEach + it returns the value
//     return num + 10; // output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//     // return num < 6; // output: [true,  true,  true, true,  true,  false, false, false, false, false]
// })

// console.log(newNums);

// const newNums = myNumers
//                 .map((num) => {
//                     return num * 10;
//                 })
//                 .map( (num) => {
//                     return num + 1;
//                 })
//                 .filter( (num) => {
//                     return num >= 40;
//                 })
//                 .filter((num) => {
//                     return num <= 84;
//                 })

// console.log(newNums);

// -----------------------------------------------------------------------------------

// reduce

// const myNums = [1, 2, 3, 4, 5];
// let initial = 0;

// const myTotal = myNums.reduce(function(accum, curr) { // at begining initial stores in cuur and 'than auto incremented' and 'stored in accum'
//     // console.log(`acc: ${accum} and currval: ${curr}`);
//     return accum + curr;
// }, initial);

// console.log(myTotal);

// ----

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "backendd course",
//         price: 12999
//     },
// ]

// const totalBill = shoppingCart.reduce((accum, item) => {
//     return accum + item.price;
// }, 0)

// console.log(totalBill);

