//functions (block of reusable code)
function add(n1,n2){
    let result=n1+n2;
    return result;
    console.log("hello");//will not print it because the code after return statment will not executes
    
}
let x=add(7,8);
console.log(x);

function loginUserMsg(username){
    return `${username} loged in`
}

console.log(loginUserMsg("Gouri"));
console.log(loginUserMsg());  //when your string is empty then it gives undefined

function loginUserMag2(username){
   if(username===undefined){
    console.log("plz enter username");
   } 
   else 
    return `${username} loged in`
}
loginUserMag2();
loginUserMag2("gouri");

function calPrice(... num1){    //spread/rest operator==>gives all values in array format
    return num1;
}
console.log(calPrice(200,300,400));

const username={
    name:"gouri",
    age:20
}
function handleObj(obj){
    console.log(`username is ${obj.name}`);
}
handleObj(username)

const arr=[8,6,9,4,0]

function handleArr(arr1){
    console.log(`In Array :${arr1} 1st ele is ${arr1[0]}`);
}
handleArr(arr);

//1.write a code for arrow function with two ex
   console.log("1.write a code for arrow function with two ex");
       const add2=(n1,n2)=>{
            return n1+n2;
        }
       console.log(" addition is :"+add2(6,7));
       
       const squre=(x)=>x**2;
       console.log(" square of 5 is "+squre(5));
       
//2.write a code for switch case
console.log("2.write a code for switch case");
  let num=4
  switch(num){
    case 1:console.log("mon");
           break;
    case 2:console.log("tue");
           break;
    case 3:console.log("wed");
           break;
    case 4:console.log("thu");
           break;
    case 5:console.log("fri");
           break;
    case 6:console.log("sat");
           break;
    case 7:console.log("sun");
           break;
    default:console.log("Invalid");  
  }

//3.how to use truthy and falsy values with ex
console.log("3.how to use truthy and falsy values with ex");

    // Truthy values:
    // Values that are treated as TRUE when used in if condition
    // Examples: non-empty string, non-zero number, true, object, array

    // Falsy values:
    // Values that are treated as FALSE when used in if condition
    // Only: false, 0, "", null, undefined, NaN
    let name = "Gouri";
    let age = 0;

    if (name) console.log("Name is present");   // string → truthy
    if (!age) console.log("Age is zero");       // 0 → falsy

    let finalName = name || "Guest";
    console.log(finalName);


//4.how to use ternary operator
console.log("4.how to use ternary operator");

  // Ternary operator is a short form of if–else
  // Syntax: condition ? value_if_true : value_if_false

    let age2 = 17;

    // Check condition in one line instead of if–else
    let result = (age2 >= 18) ? "Adult" : "Minor";

    console.log(result); // Prints "Minor"

//5.write a code for how to use loops in array=>specially describe for-of& for-in 
       console.log("5.write a code for how to use loops in array");
       
        let arr2 = [10, 20, 30];

        // 1. for loop
        // Used when index control is needed
        for (let i = 0; i < arr2.length; i++) {
        console.log(arr2[i]); // value using index
        }

        // 2. while loop
        // Runs while condition is true
        let i = 0;
        while (i < arr2.length) {
        console.log(arr2[i]);
        i++;
        }

        // 3. do-while loop
        // Runs at least once, then checks condition
        let j = 0;
        do {
        console.log(arr2[j]);
        j++;
        } while (j < arr2.length);

        // 4. for-of loop
        // Best for arrays → gives DIRECT VALUES
        for (let value of arr2) {
        console.log(value);
        }

        // 5. for-in loop
        // Gives INDEX (keys), mainly used for objects
        for (let index in arr2) {
        console.log(index, arr2[index]);
        }

//6.how to use map and filter functions
    console.log("6.how to use map and filter functions");

    let nums = [1, 2, 3, 4, 5];

    // map()
    // Used to TRANSFORM each element
    // Returns a NEW array (does not change original)
    let squares = nums.map(n => n * n);
    console.log(squares); // [1, 4, 9, 16, 25]

    // filter()
    // Used to SELECT elements based on condition
    // Returns a NEW array with matching values
    let evenNums = nums.filter(n => n % 2 === 0);
    console.log(evenNums); // [2, 4]

