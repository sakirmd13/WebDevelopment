/*
  JavaScript Variables - complete Hinglish guide
  ==============================================

  Variable ek named container hai jo data store karta hai.
  JavaScript mein variable banane ke 3 tarike hain:
  var, let aur const.
*/


// ---------------------------------------------------------------------
// 1. var - OLD / LEGACY JavaScript variable
// ---------------------------------------------------------------------

/*
  Rules:
  - var se variable declare aur initialize kar sakte hain.
  - var ko dobara declare kar sakte hain.
  - var ki value dobara assign kar sakte hain.
  - var function-scoped hota hai.
  - var ko block ke bahar bhi access karne ki galti common hai.
  - var automatically undefined se initialize ho sakta hai.
  - Modern JavaScript mein var ki jagah let ya const use karo.
*/

var studentName = "Sakir";
console.log("var studentName:", studentName);

studentName = "Rahul"; // var ki value change ho sakti hai
console.log("var updated studentName:", studentName);

var studentName = "Aman"; // var ko dobara declare kar sakte hain
console.log("var redeclared studentName:", studentName);

var age; // declaration ke baad default value undefined hoti hai
console.log("var age:", age);


// ---------------------------------------------------------------------
// 2. let - Recommended variable
// ---------------------------------------------------------------------

/*
  Rules:
  - let block-scoped hota hai: { } ke andar hi available hota hai.
  - let ko dobara declare nahi kar sakte, same scope mein.
  - let ki value dobara assign kar sakte hain.
  - let ko declare kiye bina value assign nahi karni chahiye.
  - let ko declare hone se pehle use karoge to ReferenceError milega
    (Temporal Dead Zone).
*/

let courseName = "Web Development";
console.log("let courseName:", courseName);

courseName = "Full Stack Development";
console.log("let updated courseName:", courseName);

// courseName = "React";                        // same scope mein allowed hai
// let courseName = "JavaScript";               // ERROR: dobara declare allowed nahi

if (true) {
  let blockMessage = "Main sirf is block ke andar hoon";
  console.log("Block ke andar let:", blockMessage);
}

// console.log(blockMessage); // ERROR: let block ke bahar available nahi hai


// ---------------------------------------------------------------------
// 3. const - Constant reference / value
// ---------------------------------------------------------------------

/*
  Rules:
  - const block-scoped hota hai.
  - const ko declare karte waqt value dena zaroori hai.
  - const ko dobara declare ya reassignment nahi kar sakte.
  - Primitive value ke liye value change nahi hoti.
  - Object ya array ko const se declare karo, tab bhi uski andar ki
    properties ya items change ho sakti hain.
*/

const country = "India";
console.log("const country:", country);

// country = "USA"; // ERROR: const ki primitive value reassignment allowed nahi

const student = {
  name: "Sakir",
  marks: 85
};

student.marks = 92; // object ke andar ki property change ho sakti hai
console.log("const object updated:", student);

const subjects = ["HTML", "CSS"];
subjects.push("JavaScript"); // array ke elements change ho sakte hain
console.log("const array updated:", subjects);


// ---------------------------------------------------------------------
// 4. Variable Scope
// ---------------------------------------------------------------------

/*
  Scope batata hai ki variable kahan accessible hai.

  1. Global Scope: file ke bahar kisi function/block ke andar na declare ho.
  2. Function Scope: var ya function ke andar declare kiya gaya variable.
  3. Block Scope: let aur const ke liye { } ke andar limited scope.
*/

const globalVariable = "Global scope";

function showScope() {
  var functionVariable = "Function scope";
  let blockCheck = "Only in function";

  if (true) {
    const blockVariable = "Block scope";
    console.log("Andar se:", globalVariable, functionVariable, blockCheck, blockVariable);
  }

  // console.log(blockVariable); // ERROR: block scope ke bahar nahi milega
  console.log("Function ke andar:", functionVariable);
}

showScope();

// console.log(functionVariable); // ERROR: function ke bahar nahi milega


// ---------------------------------------------------------------------
// 5. Hoisting aur Temporal Dead Zone
// ---------------------------------------------------------------------

/*
  Hoisting:
  JavaScript declaration ko scope ke top par move hua maan leti hai.

  - var: declaration hoist hoti hai, value undefined milti hai.
  - let aur const: hoist hoti hain, lekin initialization se pehle use
    karne par Temporal Dead Zone (TDZ) ke kaaran ReferenceError milta hai.
*/

console.log("var hoisting value:", hoistedVar); // undefined
var hoistedVar = "Var hoisted";

// console.log(hoistedLet); // ERROR: Temporal Dead Zone
let hoistedLet = "Let hoisted";
console.log("let hoisted value:", hoistedLet);


// ---------------------------------------------------------------------
// 6. Variable Naming Rules
// ---------------------------------------------------------------------

/*
  Naming Rules:
  - Variable ka naam letter, underscore (_) ya dollar sign ($) se start ho sakta hai.
  - Variable ke naam mein numbers use ho sakte hain, lekin start mein nahi.
  - Variable ke naam mein spaces aur hyphen (-) allowed nahi hain.
  - JavaScript variable names case-sensitive hain.
  - Reserved keywords jaise let, const, if, function variable name mein nahi use karni chahiye.

  Best Practices:
  - Naam meaningful aur camelCase mein rakho.
  - Bad names: a, x, temp, data
  - Good names: studentName, courseDuration, totalMarks
  - Ek variable ke liye ek clear naam use karo.
  - Reassign nahi karni ho to let ki jagah const use karo.
*/

let studentFirstName = "Md";
let studentLastName = "Sakir";
let totalMarks = 450;
let isEnrolled = true;

console.log({ studentFirstName, studentLastName, totalMarks, isEnrolled });


// ---------------------------------------------------------------------
// 7. Data Type ke saath variable
// ---------------------------------------------------------------------

/*
  JavaScript dynamically typed hai.
  Ek variable different type ki values hold kar sakta hai.
  typeof operator se current data type check kar sakte hain.
*/

let sample = "Hello";
console.log("String:", sample, typeof sample);

sample = 100;
console.log("Number:", sample, typeof sample);

sample = true;
console.log("Boolean:", sample, typeof sample);

sample = null;
console.log("Null:", sample, typeof sample);