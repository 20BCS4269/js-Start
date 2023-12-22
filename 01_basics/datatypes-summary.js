// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


// const bigNumber = 3456435687987n

console.log(id === anotherId);

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
   name: "abhishek",
   age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);

 
// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYotubeName = "AbhishekJha.com"

let anothername = myYotubeName
anothername = "abhishekJ"

console.log(myYotubeName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "abhishek@google.com"

console.log(userOne.email);
console.log(userTwo.email);