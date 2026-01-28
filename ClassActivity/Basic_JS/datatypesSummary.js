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
const arr = ["hello", "hi", "Gouri",4,6];
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

//memory (stack,Heap)
  //stack==>used for primitive datatypes
  //heap==>

let mytubeName='GHM'
let newmytubeName=mytubeName
console.log(mytubeName)
console.log(newmytubeName);
newmytubeName='Gouri'
console.log(newmytubeName);

// Stack memory
// Used for primitive data types (number, string, boolean, null, undefined)
// Copy of value is passed

// Heap memory
// Used for non-primitive data types (object, array, function)
// Reference is passed, not a copy


let user1={
    fname:"Gouri",
    age:20,
    id:7
}
let user2=user1   //make copy of user1

user2.id=29
console.log(user1.id);
console.log(user2.id);  //objects are stored in heap memory,when we assign one obj to another variable reference is copy not a value
   //if we change one then both variables changes



