// ARRAY OF SUPERHEROES
const superHero = ["SpiderMan", "PadMan", "BatMan", "", "C"];

// ARRAY OF STRANGER THINGS CHARACTERS
const strangerThings = ["Eleven", "Steve", "Will", "Mike", "Max", "Lucas"];

// push() → adds element at the end
// here, the ENTIRE array is added as a single element
superHero.push(strangerThings);
console.log(superHero);

// Accessing the pushed array
console.log(superHero[5]);       // prints strangerThings array
console.log(superHero[5][2]);    // accesses "Will"


// ARRAY CONCATENATION

// concat() → merges two arrays and returns a NEW array
// original arrays are not changed
const arr = superHero.concat(strangerThings);
console.log(arr);


// NESTED ARRAY
const arr2 = [1, 2, 3, [4, [5], 6], [7, 8]];
console.log(arr2);


// flat() → converts nested array into single level array
// Infinity → flattens all levels
const arr3 = arr2.flat(Infinity);
console.log(arr3);

// flat(1) → flattens only one level (default is 1)
const arr4 = arr2.flat(1);
console.log(arr4);

// NOTE:
// flat() does NOT change original array
// it returns a new array
// useful when working with nested data


// DATA SCRIPTING / ARRAY UTILITIES

// Array.isArray() → checks whether value is array or not
console.log(Array.isArray("Gouri")); // false
console.log(Array.isArray(arr2));    // true


// Array.from() → converts iterable (string, set, map) into array
console.log(Array.from("Gouri")); // ['G','o','u','r','i']


// When object is NOT iterable
// Array.from() returns empty array
console.log(Array.from({ name: "Gouri" }));

// Correct way to get object data into array
console.log(Object.keys({ name: "Gouri" }));
console.log(Object.values({ name: "Gouri" }));


// Array.of() → creates array from given values
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
