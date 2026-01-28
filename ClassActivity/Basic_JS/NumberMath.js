
// NUMBER & MATH METHODS IN JAVASCRIPT


// Number object
const balance = new Number(29);

console.log(balance);              // [Number: 29]
console.log(typeof balance);       // object (because created using new Number)

// Convert Number object to string
console.log(balance.toString());   // "29"
console.log(typeof balance.toString()); // string

// toFixed() – used to control decimal values
// Mostly used in E-commerce, banking, billing apps
console.log(balance.toFixed(2));   // "29.00"

// toPrecision() – total number of digits
console.log(balance.toPrecision(2)); // "29"

// Large number formatting
const amount = 1000000;

// US format
console.log(amount.toLocaleString());      // 1,000,000

// Indian format (company-level usage in invoices)
console.log(amount.toLocaleString("en-IN")); // 10,00,000


// ===============================
// MATH OBJECT
// ===============================

console.log(Math); // Math is a built-in object, not a function

// abs() – removes negative sign
console.log(Math.abs(-4)); // 4

// round() – rounds to nearest integer
console.log(Math.round(4.6)); // 5

// ceil() – always goes UP
console.log(Math.ceil(4.1)); // 5

// floor() – always goes DOWN
console.log(Math.floor(4.9)); // 4

// min & max – used in analytics, scoring systems
console.log(Math.max(5, 7, 2, 10)); // 10
console.log(Math.min(5, 7, 2, 10)); // 2


// ===============================
// Math.random()
// ===============================

// Generates random number between 0 and 1
console.log(Math.random());

// Real-time usage:
// OTP generation, game logic, coupon codes, random IDs

// Random number between 1 and 6 (dice example)
const dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
