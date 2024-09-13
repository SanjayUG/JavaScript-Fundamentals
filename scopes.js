
// var c = 16; // has a scope throughout the function (i.e can be accessed anywhere during program excution)

// let a = 300
// if (true) {
//     let a = 10
//     const b = 20 // do not have access outside
//     console.log("INNER: ", a);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// ----

// function foo(){
//     const username = "hitesh"

//     function inner(){    // child fun() can access parent fun(). vice versa is not possible
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//      inner()
// }

// foo()

// ----

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5); // output: ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){ // addTwo is now a expression (concpet of 'hoisting')
    return num + 2
} 