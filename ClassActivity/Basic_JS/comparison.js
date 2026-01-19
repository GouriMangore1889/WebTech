// Comparison operators
console.log(5 == "5"); // true (only value compared)
console.log(5 === "5"); // false (value + type)
console.log(5 != "5"); // false
console.log(5 !== "5"); // true


console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 9); // false

console.log("10" > 5);     // true
console.log("2" > "10");  // true (string comparison!)

console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false

// Explanation:
// == does type conversion
// === does NOT do type conversion