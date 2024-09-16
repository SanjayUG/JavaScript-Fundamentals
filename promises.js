
// xhr (used in olden days)

// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// const requestUrl = "https://api.github.com/users/SanjayUG";
// const xhr = new XMLHttpRequest();

// xhr.open('GET', requestUrl);

// console.log("request sending...");

// xhr.send();

// console.log("sent Successfully");


// ------------------------------------------------------------------------------

// promise

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async task is completed");
//         resolve();  
//     }, 1000)
// })

// promise1.then(() => { // .then expects a function
//     console.log("pormiseOne resloved");  
// })

// ----

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const data = {
//             id: 16,
//             name: "KRISHNA"
//         }
//         resolve(data);
//     }, 1600)
// })
// .then((data) => {
//     console.log(data)
//     return data.name;
// })
// .then((name) => {
//     console.log(name);
// })

// ----

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let userLogin = {
//             name: "KRISHNA",
//             password: 1234564321
//         };
//         const error = false;
//         if (!error) {
//             resolve(userLogin);  
//         } else {
//             reject("ERROR: Something went wrong");
//         }
//     }, 1600)
// });

// promise3
// .then((user) => {
//     console.log(user);
//     return user.password;
// }) 
// .then((password) => {
//     console.log(password);
// })
// .catch((e) => {
//     console.log(e);  
// })
// .finally(() => {
//     console.log("Promise is either resolved or rejected");
    
// })

// ----

// async...await (it is createing the function and then using(calling) it)

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let userLogin = {
//             name: "KRISHNA",
//             password: 1234564321
//         };
//         const error = true;
//         if (!error) {
//             resolve(userLogin);  
//         } else {
//             reject("ERROR: Something went wrong");
//         }
//     }, 1600)
// });

// async function consumdePromise4() {
//     try { // reolved part
//         const responce = await promise4;
//         console.log(responce);
//     } catch (error) { // reject part
//         console.log(error);
//     }
// }

// consumdePromise4();

// ------------------------------------------------------------------------------------

// using async...await

// async function getAllUser() {
//     try {
//         const responce = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await responce.json();
//         // console.log(responce);
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUser();

// ----

// using .then, .catch

fetch("https://jsonplaceholder.typicode.com/users")
.then((responce) => {
    return responce.json();
})
.then((jsonData) => {
    console.log(jsonData);
    return jsonData;
})
.then((data) => {
//    const ids = []; // using forEach loop
//    data.forEach((d) => {
//         ids.push(d.id);
//    })
//    console.log(ids);

    const ids = data.map((d) => { // using map loop
        return d.id;
    })
   console.log(ids);

    return data;
})
.then((data) => {
    const names = data.map((data) => {
        return data.name;
    })
    console.log(names);
    
    return data;
})
.then((data) => {
    const phoneNumbers = data.map((data) => {
        return data.phone;
    })
    console.log(phoneNumbers);
    
    return data;
})
.then((data) => {
    const geoLocation = data.map((data) => {
        return data.address.geo;
    })
    console.log(geoLocation);

    return data;
})
.then((data) => {
    data.forEach((data) => {
        console.log(`Id: ${data.id} UserName: ${data.username}`);
        
    })
})
.catch((e) => {
    console.log(e);
})
