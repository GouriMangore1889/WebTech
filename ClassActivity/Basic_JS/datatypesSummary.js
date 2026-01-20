// DATA TYPES IN JAVASCRIPT

// JavaScript is dynamically typed
// This means we do not need to specify the data type of a variable

// Primitive Data Types
// Number, String, Boolean, Null, Undefined, Symbol, BigInt

let num = 10;                 
let name = "Gouri";           
let isStudent = true;         
let value = null;             
let x;                       

const uniqueId = Symbol("123"); // Symbol
console.log(typeof uniqueId);   // symbol

// Symbol comparison
const anotherUniqueId = Symbol("123");
console.log(uniqueId === anotherUniqueId); // false (symbols are always unique)


// Non-Primitive Data Types
// Object, Array, Function

// Array (collection of values)
const arr = ["hello", "hi", "Gouri"];
const numbers = [1, 2, 3, 4, 5];

console.log(arr);
console.log(arr[0]); // Accessing array element


// Object (key-value pairs)
const info = {
    name: "Gouri",
    rollNo: 5,
    age: 20
};

console.log(info);
console.log(info.name);
console.log(info.age);


// Function (block of reusable code)
function greet(userName) {
    return `Hello, ${userName}`;
}

console.log(greet("Gouri"));


// STRING CONCEPTS

// String primitive
let str1 = "Gouri";
console.log(str1);
console.log(typeof str1); // string

// String interpolation 
console.log(`Hello, my name is ${str1}`);


// String object (created using new keyword)
const gameCount = new String("Gouri"); // String object
console.log(typeof gameCount); // object

// String methods
console.log(gameCount.length);       
console.log(gameCount.toUpperCase()); 
console.log(gameCount.toLowerCase()); 
console.log(gameCount.charAt(2));     
console.log(gameCount.indexOf('G'));  
