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
