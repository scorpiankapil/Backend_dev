let a = "Hello World!!!";
console.log(a.length);
/* 
length gives the length or height of the string, and using console.log we can see it.
It start counting from 1
*/

console.log(a); // It prints the string of a

console.log(a.charAt(0));  // It gives the value of index zero.

let b = "HELLO";
let lower = b.toLowerCase(); // It coverts all strings into LOWER case.
console.log(lower);

let upper = b.toUpperCase(); // It coverts all strings into UPPER case.
console.log(upper);

let c = " Web Application Hacker's Handbook 2 ";
console.log(c.trim()); // Removes spaces from left and right but in the middle.

console.log(a.includes("Hello World!!!")); // Checks the strings, if it present then gives true, else it will give false.

console.log(a.startsWith("Hello")); // it is use to check that string starts with, if it is correct then it will gives true.
console.log(a.endsWith("Hello"));   // it is use to check that string ends with, if it is correct then it will gives false.

console.log(a.slice(a)); // it is used to find all sub strings and it works on index.

console.log(a.replace("l", "w")); // it replace the one letter from string.
console.log(a.replaceAll("l", "w")); // it replace all the letter from string.


let p = "(([]))";
let q;
do {
  q = p;
  p = p.replace("()", "") //It repeatedly removes valid bracket pairs () and [] from the string until no more can be removed.
       .replace("[]", "") // //If the string becomes empty, the brackets are balanced (Valid); otherwise, they are Not Valid.
       
} while (p !== q);
if (p.length === 0) {
  console.log("Valid");
} else {
  console.log("Not Valid");
}


let x = "I Am KaPil";
let result = "";

for (let i = 0; i < x.length; i++) {
  let ch = x[i];

  if (ch === ch.toUpperCase()) {
    result += ch.toLowerCase();  // Where the letters is in UPPER case, it coverts into LOWER case. 
  } else {
    result += ch.toUpperCase();
  }
}

console.log(result);
