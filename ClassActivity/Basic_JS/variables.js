// Difference between var, let, and const
// var has function scope and can be re-declared
var a = 10;
var a = 20;


// let has block scope and cannot be re-declared
let b = 30;
  //let b = 40; // Error if uncommented


// const value cannot be changed
const c = 50;
// c = 60; // Error

//for ex
var a=1
let ab=2
{
    var a=10;
    let ab=20;
    console.log("in scope="+a)
    console.log("in scope="+ab)
}
    console.log(a)  //for var ==>we can reassign,redeclair it into different scope
    console.log(ab) //let ==>we can't


// Primitive data types
let num = 10; // Number
let name = "Gouri"; // String
let isStudent = true; // Boolean
let x = undefined; // Undefined
let y = null; // Null


// Non-Primitive data types
let arr = [1, 2, 3]; // Array
let obj = { age: 20 }; // Object




// Checking data types using typeof
console.log(typeof num);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof x);
console.log(typeof y); // object (this is a JS bug)
console.log(typeof arr);
console.log(typeof obj);




// Difference between null and undefined
// undefined means variable is declared but not assigned
let p;


// null means variable is intentionally empty
let q = null;