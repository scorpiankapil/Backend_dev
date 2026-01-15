// ==============================
// Hello World
// ==============================

// console.log() is used to print output to the console (terminal / browser console)
// It is mainly used for debugging and checking values
// console.log() ALWAYS returns undefined
console.log("Node.js backend started");

console.log("Hello World!!!"); 
// Used to display a simple text message


// ==============================
// Variables
// ==============================

// let is used to declare block-scoped variables
// "Kapil" is a STRING (text data)
// Strings are immutable (cannot be changed directly)
let name = "Kapil";

// JavaScript has only ONE number type: Number
// It represents both integers and floating-point numbers
let age = 23;

// const is used for variables whose value should NOT be reassigned
// Once assigned, you cannot change the value
const country = "India";

// Boolean data type → true or false
let isStudent = true;

// var is the OLD way of declaring variables
// It is function-scoped and can cause bugs, so avoid using it
var x = 500;


// Printing variables
console.log(name);
console.log(age);
console.log(country);
console.log(isStudent);

// Arithmetic operation
console.log(80 + 100);   // Addition

// Comparison operator
// Returns boolean (true / false)
console.log(60 > 100);

// Printing var variable
console.log(x);


// ==============================
// Data Types
// ==============================

// A variable declared but NOT assigned a value → undefined
let score;

// null means "no value" or "empty intentionally"
let data = null;

console.log(score);  // undefined
console.log(data);   // null


// ==============================
// Objects
// ==============================

// Object stores data in key-value pairs
// Used to represent real-world entities
let user = {
    name: "Kapil",
    age: 23,
    email: "kapil@gmail.com"
};


// ==============================
// Operators
// ==============================

let a = 10;
let b = 5;

// Arithmetic operators
console.log("Add:", a + b); // Addition
console.log("Sub:", a - b); // Subtraction
console.log("Mul:", a * b); // Multiplication
console.log("Div:", a / b); // Division


// ==============================
// Conditional Statements (if-else)
// ==============================

// loginAge is declared but not initialized → undefined
let loginAge;

// if condition checks whether the expression is true or false
if (loginAge > 0) {
    console.log("Allowed to login");
} else {
    // else block runs when condition is false
    console.log("Not Allowed");
}


// ==============================
// Loop (for loop)
// ==============================

// for loop is used to repeat a block of code
// Initialization → let i = 1
// Condition → i <= 5
// Increment → i++
for (let i = 1; i <= 5; i++) {
    console.log("Loop count:", i);
}


// ==============================
// Functions
// ==============================

// Function is a reusable block of code
// x and y are parameters
function add(x, y) {
    return x + y; // return sends value back to function call
}

// Calling the function with arguments
let result = add(20, 30);

console.log("Function result:", result);


// ==============================
// Simple Backend Login Logic
// ==============================

// admin object stores login credentials
const admin = {
    username: "admin",
    password: "123456789"
};

// login function checks username and password
function login(user, pass) {

    // === is strict equality operator
    // It checks both VALUE and DATA TYPE
    if (user === admin.username && pass === admin.password) {
        console.log("Login Successful");
    } else {
        console.log("Invalid Username or Password");
    }
}

// Function call with correct credentials
login("admin", "123456789");
