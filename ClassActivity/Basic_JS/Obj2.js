// Object created using Object constructor

const user = new Object();   //singleton obj ,,because we have created only one 
console.log(user);             

// Object literal
const user1 = {};  

user1.id = 1234;
user1.name = "Gouri";
user1.age = 20;
user1.email = "mg@gmail.com";
user1.isLogin = true;

console.log(user1);

// ---------------------------------
// Object inside object (nested object)

const user3 = {
    email: "abc@gmail.com",
    username: {
        name: {
            fullName: "Gouri",
            lastName: "Mangore"
        }
    }
};

console.log(user3);

// Accessing nested object properties
console.log(user3.username.name.fullName);
console.log(user3.username.name);
