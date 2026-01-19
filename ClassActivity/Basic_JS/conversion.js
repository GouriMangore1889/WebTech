// String to Number
let strNum = "123";
let num1 = Number(strNum);
console.log(num1, typeof(num1));


// Number to String
let n = 456;
let str = String(n);
console.log(str, typeof(str));


// Boolean conversions
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("Hi")); // true


// Other conversions
console.log(Number("abc")); // NaN
console.log(typeof(NaN)); // number
console.log(Number([]));        // 0
console.log(Number([10]));      // 10
console.log(Number([10,20]));   // NaN

console.log(Boolean([]));       // true  //Empty array is true, not false.
console.log(Boolean({}));       // true  