
// DATE & TIME IN JAVASCRIPT


let myDate = new Date();

console.log(myDate); // Full date object

console.log(myDate.toDateString()); 
// Example: Thu Jan 22 2026

console.log(myDate.toISOString());  
// Used in backend & databases (ISO standard)
// Example: 2026-01-22T09:56:03.187Z

console.log(myDate.toLocaleDateString()); 
// Local format: 22/1/2026

console.log(myDate.toString());     
// Complete readable format with timezone


// ===============================
// TIMESTAMP
// ===============================

// Timestamp = milliseconds since 1 Jan 1970
// Used in polls, chats, logs, payments

let myTimeStamp = Date.now();

console.log(myTimeStamp);           // milliseconds
console.log(Math.floor(Date.now() / 1000)); // seconds


// ===============================
// DATE METHODS
// ===============================

let newDate = new Date();

console.log(newDate.getDate());      // Day of month
console.log(newDate.getMonth());     // Month (0-based)
console.log(newDate.getFullYear());  // Year
console.log(newDate.getUTCDate());   // UTC date

console.log(
  newDate.toLocaleString("default", {
    weekday: "long"
  })
); // Thursday
