
// Singleton - Object(), String(), Number(), Array(), Date(), etc

// object Literals

const symb = Symbol("key");

// const user = {
//     name: "KRISHNA",
//     age: 16,
//     "user id": 1484,
//     [symb]: "microsoft",  // symbol can only be accesed with []
//     email: "abc1@.gmail.com",
//     isLogedIn: true,
//     lastLogedIn: ["mon", "thur"],
//     workingHour: function() {
//         console.log(`10 AM to 3 PM`);   
//     }
// }

// console.log(user);

// console.log(user.name); // can be accessed values in 2 ways
// console.log(user["name"]);

// // console.log(user.user id);  // not possible
// console.log(user["user id"]);

// console.log(user[symb]);

// ----

// user.email = "def1@.gmail.com"
// console.log(user);

// Object.freeze(user); // freezes the object and feather changes are not applied

// user.email = "xyz1@.gmail.com" // now this change is not applied
// console.log(user); 

// ----

// user.workingHour()

// we can define values or function outside the object

// user.numberOfMeeting = function() {
//     console.log(`1 meeting minimun in a week for ${this.name}`);   
// }

// user.numberOfMeeting() // output: 1 meeting minimun in a week for KRISHNA
// console.log(user.numberOfMeeting()); // output: 1 meeting minimun in a week for KRISHNA `and` undefined 
// console.log(user.numberOfMeeting); // output: [Function (anonymous)]

// ----------------------------------------------------------------------

// const instaUser = new Object(); // singletone object
// console.log(instaUser);

// const instaUser = {}; // non-singletone object
// // console.log(instaUser);

// instaUser.name = "RAM";
// instaUser.password = 123454321;
// instaUser.email = "RAM@gmail.com";
// instaUser.isLogedIn = false;
// instaUser.follower = "100M";

// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// ----

// const outlookUser = {
//     email: "abc1@outlook.com",
//     "more apps": {
//         word: {
//             fileName: "demo file",
//             wordCount: 108,
//             fileSize: "164kb"
//         },
//         powerPoint: {
//             pptName: "test ppt",
//             numberOfSlides: 6,
//             extention: ".ppt"
//         }
//     }
// }

// console.log(outlookUser["more apps"].word.fileSize);

// ----

// const obj1 = {
//     1: "a",
//     2: "b"
// };
// const obj2 = {
//     3: "c",
//     4: "d"
// };
// const obj3 = {
//     5: "e",
//     6: "f"
// };

// const combineObj1 = {obj1, obj2, obj3};
// const combineObj2 = Object.assign({}, obj1, obj2, obj3);
// const combineObj3 = {...obj1, ...obj2, ...obj3};

// console.log(combineObj2);

// ----

// const user = [    
//     {
//         name: "KRISHNA",
//         age: 16,
//         email: "abc1@.gmail.com",
//         isLogedIn: true,
//         lastLogedIn: ["mon", "thur"]
//     },
//     {
//         name: "RADHA",
//         age: 16,
//         email: "abc12@.gmail.com",
//         isLogedIn: true,
//         lastLogedIn: ["mon", "thur"]
//     },
//     {
//         name: "RAM",
//         age: 24,
//         email: "abc13@.gmail.com",
//         isLogedIn: true,
//         lastLogedIn: ["tue", "fri"]
//     },
//     {
//         name: "SITHA",
//         age: 24,
//         email: "abc14@.gmail.com",
//         isLogedIn: false,
//         lastLogedIn: ["mon", "thur"]
//     }
// ]

// console.log(user);
// console.log(user[0].name);

// ----

// object destructuring

// const schoolDB = {
//     dbUsed: "mysql",
//     numberOfTable: "3",
//     dbSize: "6gb"
// }

// const {numberOfTable} = schoolDB;
// const {numberOfTable: tables} = schoolDB; // giving an alias(new name)

// console.log(numberOfTable);
// console.log(tables);

// ----

// josn formate

// {
//     "name": "SITHA",
//     "age": 24,
//     "email": "abc14@.gmail.com",
//     "isLogedIn": true,
//     "lastLogedIn": ["mon", "thur"]
// }

// [
//     {
//         1: "a",
//         2: "b"
//     },
//     {
//         3: "c",
//         4: "d"
//     },
//     {
//         5: "e",
//         6: "f"
//     }
// ]
