// SYMBOL must be declared before use 
const mySymbol = Symbol("key");

// Object literal
let myObj = {
    fName: "Gouri",                 
    age: 20,                       
    location: "Ichalkaranji",
    email: "mangoregouri@gmail.com",
    isLogin: true,
    loginDays: ["Mon", "Tue", "Wed"],
    fullName: "Gouri Mangore",
    [mySymbol]: "myKeyOne"       
};

// -------------------------------
// Objects in JavaScript
// 1. Object Literal {}
// 2. Object Constructor new Object()
// 3. Singleton (design pattern, not automatic)
//    A singleton has two rules:
            // 1.Only one object is ever created
            // 2.Every time you ask for it, you get the same object

// Creating an object using constructor does NOT make it singleton
// Object literal also does NOT create singleton
// Singleton must be explicitly designed

// Object literal (key-value pairs)

console.log(myObj);
console.log(myObj.email);
console.log(myObj.fName);
console.log(myObj.fullName);
myObj.email = "mangore@gmail.com";
console.log(myObj.email);

// Object.freeze(myObj); // prevents further changes 

// Adding method
myObj.greeting = function () {
    return "Hello JS user";
};

// Calling method
console.log(myObj.greeting());

// -------------------------------
// Symbol example

const myObj2 = {
    [mySymbol]: "Gouri"
};

console.log(myObj2);
console.log(typeof myObj2); // object

// Correct way to access symbol value
console.log(myObj2[mySymbol]);
console.log(typeof myObj2[mySymbol]);
