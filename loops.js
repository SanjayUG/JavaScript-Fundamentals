
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


// ---------------------------------------------------------------------

// forEach

// const coding_languages = ["c", "cpp", "java", "javascript", "python"];

// coding_languages.forEach(function(currValue, index, array) {
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

// -------------------------------------------------------------------------------

