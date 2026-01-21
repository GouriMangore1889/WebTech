// Array
let arr = [0, 1, 2, 3, 4];
console.log(`My array values are ${arr}`);
console.log(`Type of arr is ${typeof arr}`); // object (array is a special object)
console.log(`Is arr an array? ${Array.isArray(arr)}`);

// Array declaration using constructor
const arr1 = new Array(0, 1, 2);
console.log(`Element at index 1 is ${arr1[1]}`);

// Array methods

arr1.push(4);               // adds element at the end
console.log(arr1);

arr1.pop();                 // removes last element
console.log(arr1);

arr1.unshift(7);            // adds element at beginning
console.log(arr1);

arr1.shift();               // removes first element
console.log(arr1);

console.log(arr1.includes(1)); // returns true if element exists
console.log(arr1.indexOf(1));  // returns index or -1

// slice vs splice
console.log(arr1.slice(0, 2)); // does NOT modify original array
console.log(arr1);

arr1.splice(1, 1, 9);       // modifies array (remove & insert)
console.log(arr1);

// join
console.log(arr1.join("-")); // converts array to string

// concat
let arr2 = [10, 11];
let mergedArr = arr1.concat(arr2);
console.log(mergedArr);

// spread operator 
let spreadArr = [...arr1, ...arr2];
console.log(spreadArr);

// reverse
arr1.reverse();
console.log(arr1);

// sort 
let nums = [10, 2, 5, 1];
nums.sort((a, b) => a - b);
console.log(nums);
