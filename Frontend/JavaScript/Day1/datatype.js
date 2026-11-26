/*
  JavaScript Data Types - complete Hinglish guide
  ==============================================

  JavaScript mein data ke multiple types hote hain.
  Data type batata hai ki variable kis category ki value store karta hai.

  JavaScript mein do main categories hain:
  1. Primitive / Primitive data types
  2. Non-Primitive / Object data types
*/


// ---------------------------------------------------------------------
// 1. String
// ---------------------------------------------------------------------

/*
  String text data ko represent karta hai.
  Single quotes, double quotes ya backticks ke andar likhte hain.

  Rules:
  - Text ko quotes ke andar likhna zaroori hai.
  - String ki length length property se milti hai.
  - String ka type typeof operator se check hota hai.
  - Template literals mein ${ } ke andar variable insert hota hai.
*/

const studentName = "Sakir";
const course = 'JavaScript';
const message = `Welcome ${studentName}, you are learning ${course}`;

console.log("String:", studentName);
console.log("String length:", studentName.length);
console.log("Template Literal:", message);
console.log("typeof studentName:", typeof studentName);


// ---------------------------------------------------------------------
// 2. Number
// ---------------------------------------------------------------------

/*
  Number integers aur decimal/double values dono ko represent karta hai.

  Examples:
  - 42 -> integer
  - 3.14 -> decimal
  - Infinity -> special positive number
  - NaN -> Not a Number

  Rules:
  - Number mein quotes nahi lagte.
  - Number calculations ke liye arithmetic operators use hoti hain.
  - isNaN() check karta hai ki value NaN hai ya nahi.
*/

const age = 20;
const price = 499.99;
const result = age + 5;
const invalidNumber = Number("abc");

console.log("Number age:", age);
console.log("Number price:", price);
console.log("Number addition:", result);
console.log("typeof age:", typeof age);
console.log("Infinity:", Infinity);
console.log("NaN:", invalidNumber);
console.log("isNaN:", isNaN(invalidNumber));


// ---------------------------------------------------------------------
// 3. BigInt
// ---------------------------------------------------------------------

/*
  BigInt bahut bade integer values ke liye use hota hai.

  Rules:
  - Number ke end mein n lagta hai.
  - Example: 9007199254740991n
  - BigInt ko direct Number ke saath mathematically add nahi kar sakte.
*/

const bigNumber = 9007199254740991n;

console.log("BigInt:", bigNumber);
console.log("typeof bigNumber:", typeof bigNumber);


// ---------------------------------------------------------------------
// 4. Boolean
// ---------------------------------------------------------------------

/*
  Boolean mein sirf do values hoti hain:
  - true
  - false

  Rules:
  - Boolean decision aur condition checking ke liye use hota hai.
  - true/false ko quotes ke andar mat likho.
*/

const isStudent = true;
const isPassed = false;
const isEligible = age >= 18;

console.log("Boolean isStudent:", isStudent);
console.log("Boolean isPassed:", isPassed);
console.log("Boolean condition:", isEligible);
console.log("typeof isStudent:", typeof isStudent);


// ---------------------------------------------------------------------
// 5. Undefined
// ---------------------------------------------------------------------

/*
  Undefined ka matlab hai ki variable declare hua hai,
  lekin abhi usmein koi value assign nahi hui.

  Rules:
  - let se bina value diye variable declare karne par undefined milta hai.
  - undefined ek data type aur ek value dono hai.
*/

let selectedCourse;

console.log("Undefined selectedCourse:", selectedCourse);
console.log("typeof selectedCourse:", typeof selectedCourse);


// ---------------------------------------------------------------------
// 6. Null
// ---------------------------------------------------------------------

/*
  Null ka matlab intentionally koi value nahi hai.

  Rules:
  - Null developer ya API dwara explicitly assign kiya jaata hai.
  - typeof null ka result object hota hai.
  - Yeh JavaScript ka historical behavior hai.
*/

let middleName = null;

console.log("Null middleName:", middleName);
console.log("typeof middleName:", typeof middleName);


// ---------------------------------------------------------------------
// 7. Symbol
// ---------------------------------------------------------------------

/*
  Symbol unique aur immutable identifier banata hai.

  Rules:
  - Same description wale do Symbol hamesha alag maane jaate hain.
  - Mostly object keys aur advanced JavaScript mein use hota hai.
*/

const symbolOne = Symbol("id");
const symbolTwo = Symbol("id");

console.log("Symbol:", symbolOne);
console.log("typeof symbolOne:", typeof symbolOne);
console.log("Symbols are unique:", symbolOne === symbolTwo);


// ---------------------------------------------------------------------
// 8. Object
// ---------------------------------------------------------------------

/*
  Object key-value pairs ka collection hota hai.

  Rules:
  - Property ka naam string/symbol ho sakta hai.
  - Property ko dot notation ya bracket notation se access karte hain.
  - Object ke andar function bhi ho sakta hai.
*/

const student = {
  name: "Sakir",
  age: 20,
  isEnrolled: true,
  subjects: ["HTML", "CSS", "JavaScript"]
};

console.log("Object:", student);
console.log("Dot notation:", student.name);
console.log("Bracket notation:", student["age"]);
console.log("Object subject:", student.subjects[2]);
console.log("typeof student:", typeof student);


// ---------------------------------------------------------------------
// 9. Array
// ---------------------------------------------------------------------

/*
  Array ordered list of values hota hai.
  Array ek special type ka object hota hai.

  Rules:
  - Array ke elements 0 se index start karte hain.
  - length property elements ki count batati hai.
  - Array ke data type ke liye Array.isArray() use hota hai.
*/

const technologies = ["HTML", "CSS", "JavaScript", "React"];

console.log("Array:", technologies);
console.log("First array item:", technologies[0]);
console.log("Array length:", technologies.length);
console.log("typeof technologies:", typeof technologies);
console.log("Array check:", Array.isArray(technologies));


// ---------------------------------------------------------------------
// 10. Function
// ---------------------------------------------------------------------

/*
  Function reusable block of code hota hai.

  Rules:
  - Function ko call karne par code execute hota hai.
  - Function parameters input accept karte hain.
  - return se function value wapas karta hai.
  - JavaScript mein function bhi object-like first-class value hai.
*/

function addNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

const subtraction = function (numberOne, numberTwo) {
  return numberOne - numberTwo;
};

const multiplication = (numberOne, numberTwo) => numberOne * numberTwo;

console.log("Function result:", addNumbers(10, 20));
console.log("Function expression:", subtraction(20, 5));
console.log("Arrow function:", multiplication(4, 5));
console.log("typeof addNumbers:", typeof addNumbers);


// ---------------------------------------------------------------------
// 11. Date
// ---------------------------------------------------------------------

/*
  Date object date aur time ko represent karta hai.
*/

const currentDate = new Date();

console.log("Date:", currentDate);
console.log("typeof currentDate:", typeof currentDate);


// ---------------------------------------------------------------------
// 12. Primitive aur Reference data types ka farak
// ---------------------------------------------------------------------

/*
  Primitive types value by value copy hoti hain:
  String, Number, BigInt, Boolean, Undefined, Null aur Symbol.

  Reference types reference/address share karte hain:
  Object, Array aur Function.

  Primitive example:
  a ki value b ko copy hoti hai.
  b change karne par a change nahi hota.

  Reference example:
  Object ko kisi doosre variable mein assign karne par same object
  share hota hai.
*/

let firstName = "Sakir";
let secondName = firstName;
secondName = "Rahul";

console.log("Primitive copy firstName:", firstName);
console.log("Primitive copy secondName:", secondName);

const originalStudent = { name: "Aman", marks: 80 };
const copiedStudent = originalStudent;

copiedStudent.marks = 95;

console.log("Reference copy originalStudent:", originalStudent);
console.log("Reference copy copiedStudent:", copiedStudent);


// ---------------------------------------------------------------------
// 13. typeof operator
// ---------------------------------------------------------------------

/*
  typeof operator variable ki current data type batata hai.

  Important outputs:
  typeof "Hi"       -> "string"
  typeof 10         -> "number"
  typeof 10n        -> "bigint"
  typeof true       -> "boolean"
  typeof undefined  -> "undefined"
  typeof null       -> "object"
  typeof Symbol()   -> "symbol"
  typeof {}         -> "object"
  typeof []         -> "object"
  typeof function(){} -> "function"
*/

console.log("String type:", typeof "Hello");
console.log("Number type:", typeof 100);
console.log("BigInt type:", typeof 100n);
console.log("Boolean type:", typeof false);
console.log("Undefined type:", typeof unknownValue);
console.log("Null type:", typeof null);
console.log("Symbol type:", typeof Symbol("key"));
console.log("Object type:", typeof {});
console.log("Array type:", typeof []);
console.log("Function type:", typeof (() => {}));