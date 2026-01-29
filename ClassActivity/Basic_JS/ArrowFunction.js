// Normal function
// In normal functions, `this` depends on how the function is called

const addNum = function () {
  let username = "gouri";

  console.log(this.username); // undefined (no object is calling this function)
  console.log(username);      // gouri (local variable)
};

addNum(); // function CALL, not reference


// Another normal function
const coffee2 = function () {
  let username = "gouri";

  console.log(this.username); // undefined
};

coffee2();


// Arrow function
// Arrow functions do NOT have their own `this`
// They take `this` from the surrounding scope

const coffee = () => {
  let username = "gouri";

  console.log(this); // {} or window/global object (depends on environment)
};

coffee();


// Arrow function with parameters
const add = (n1, n2) => {
  return n1 + n2;
};

console.log(add(6, 7)); // 13
