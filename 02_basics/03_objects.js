// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    "full name": "Abhishek Jha",
    [mySym]: "myKey1",
    name: "Abhishek",
    age: 18,
    location: "Chandigarh",
    email: "abhij4269@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "abhij4269@google.com"
// Object.freeze(JsUser)
JsUser.email = "abhij4269@microsoft.com"
// console.log(JsUser);
    
JsUser.greeting = function() {
    console.log("hello JS User");
}
JsUser.greetingTwo = function() {
    console.log(`hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
