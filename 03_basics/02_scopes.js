// var c = 300
let a = 100
if (true) {
    let a = 10  // code under "if" is block scope and outer is global scope
    const b = 20
    // console.log("INNER: ", a); 
}



// console.log(a);
// console.log(b);
// console.log(c);



function one() {
    const username = "abhishek"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "abhishek"
    if (username === "abhishek") {
       const website = " youtube"
    // console.log(username + website); 
    }
    // console.log(website);
    // console.log(username);
}

// console.log(username);


// +++++++++++++++++++++ interesting

console.log(addone(5))

function  addone(num){
    return num + 1
}

addTwo(5)

const addTwo = function(num){
    return num + 2
}

