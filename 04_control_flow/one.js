// if
// const isUserloggedIn = true
// const temperature = 41

// if (temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`); 
// }

// console.log(`user power: ${power}`);


// const balance = 1000

// if (balance > 500 ) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");


// } else {
//     console.log("less than 1200");
// }

const isUserloggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEamil = true

if (isUserloggedIn && debitcard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEamil) {  // here && and || are logical operator -> && means all condition should be true
    console.log("User logged in");              // and || means if even one condition is true it will eork
}