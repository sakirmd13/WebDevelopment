// Operators par kaam karte hain, jaise calculation, comparison ya conditions check karna.
// Neeche kuch examples `//` se commented hain; unhe uncomment karke run kar sakte hain.

// 1. Arithmetic operators: numbers par calculations ke liye.
// + add, - subtract, * multiply, / divide, % remainder, ** power.
// let num1 = 2;
// let num2 = 4;
// console.log(num1 + num2);  // 6
// console.log(num1 - num2);  // -2
// console.log(num1 * num2);  // 8
// console.log(num1 ** num2); // 16

// Division quotient deta hai; remainder (%) division ke baad bacha hua hissa.
// console.log(num1 / num2); // 0.5
// console.log(num1 % num2); // 2
// console.log(num2 / num1); // 2
// console.log(num2 % num1); // 0

// 2. JavaScript case-sensitive hai: uppercase/lowercase alag identifiers hain.
// let name = "Sakir";
// let Name = "Wasid";
// let NAME = "Danish";

// console.log(name); // Sakir
// console.log(Name); // Wasid
// console.log(NAME); // Danish

// 3. Increment/decrement operators ek se value badhate/ghatate hain.
// Postfix (num++) pehle purani value expression ko deta hai, baad mein badhata hai.
// Example: expression 46 deta hai, phir num 47 ho jata hai.
// let num = 46;
// console.log(num++); // 46
// console.log(num);   // 47

// Prefix (++num) pehle badhata hai, phir nayi value deta hai.
// let num3 = 44;
// console.log(++num3); // 45
// console.log(num3);   // 45

// Postfix decrement (num--) purani value deta hai, phir ek ghatata hai.
// let num3=44
// console.log(num3--); // 44
// console.log(num3);   // 43

// Prefix decrement (--num3) pehle ghatata hai, phir nayi value deta hai.
// let num4 = 44;
// console.log(--num4); // 43
// console.log(num4);   // 43

// 4. Compound assignment: operation aur assignment ko short form mein likhta hai.
// Jaise num += 5 ka matlab num = num + 5.
// let num = 2;
// num += 5;  // 7
// num -= 5;  // 2
// num *= 5;  // 10
// num /= 5;  // 2
// num %= 5;  // 2 (remainder)
// num **= 5; // 32 (2 ki power 5)

// 5. Comparison operators do values compare karke true ya false dete hain.

const num1 = 10;
const num2 = 20;
console.log(num1 > num2);  // false: 10, 20 se bada nahi hai
console.log(num1 < num2);  // true
console.log(num1 >= num2); // false: 10, 20 se bada ya barabar nahi
console.log(num1 <= num2); // true
console.log(num1 == num2); // false
console.log(num1 != num2); // true

// == / != loose comparison hai: comparison se pehle type conversion ho sakta hai.
console.log("5" == 5); // true: string "5" number 5 mein convert hoti hai
// === / !== strict comparison hai: value aur type dono same hone chahiye.
console.log("5" === 5); // false: string aur number alag types hain
console.log(5 !== 4);   // true

// 6. Logical operators multiple conditions combine ya reverse karte hain.
// true = condition sahi; false = condition galat.
// AND (&&): dono conditions true honi chahiye.
console.log("AND (&&) truth table");
console.table([
  { A: true, B: true, Result: true && true },
  { A: true, B: false, Result: true && false },
  { A: false, B: true, Result: false && true },
  { A: false, B: false, Result: false && false },
]);

// OR (||): kam se kam ek condition true ho to result true hota hai.
console.log("OR (||) truth table");
console.table([
  { A: true, B: true, Result: true || true },
  { A: true, B: false, Result: true || false },
  { A: false, B: true, Result: false || true },
  { A: false, B: false, Result: false || false },
]);

// NOT (!): ek boolean value ko ulta kar deta hai.
console.log("NOT (!) truth table");
console.table([
  { A: true, Result: !true },
  { A: false, Result: !false },
]);

// Example: movie entry ke liye ticket aur 18+ age dono zaroori hain (AND).
const hasTicket = true;
const age = 20;
console.log("Movie entry allowed:", hasTicket && age >= 18); // true

// Example: student ya senior citizen mein se koi ek ho to discount milta hai (OR).
const isStudent = false;
const isSeniorCitizen = true;
console.log("Discount available:", isStudent || isSeniorCitizen); // true

// Example: ! condition ko reverse karta hai; shop band nahi hai, isliye true.
const isShopClosed = false;
console.log("Can shop:", !isShopClosed); // true


// 7. Truthy aur falsy values
// Condition mein falsy value false jaisi behave karti hai; truthy value true jaisi.
// Falsy values: false, 0, -0, 0n, "", null, undefined aur NaN.
// `!value` truthiness ko reverse karta hai, isliye falsy values ke liye true deta hai.
console.log(!"");        // true: empty string falsy hai
console.log(!null);      // true
console.log(!undefined); // true
console.log(!NaN);       // true
console.log(!false);     // true
console.log(!0);         // true: 0 falsy hai
console.log(!0n);        // true: 0n falsy hai

// Baaki values truthy hoti hain, inmein non-zero numbers, non-empty strings,
// arrays aur objects shamil hain. `!` lagane par result false hota hai.
console.log(!50);       // false: 50 truthy hai
console.log(!-50);      // false: non-zero negative number bhi truthy hai
console.log(!"Sakir");  // false: non-empty string truthy hai
console.log(![]);       // false: empty array bhi truthy hai
console.log(!true);     // false
console.log(!{});       // false: empty object bhi truthy hai

// Boolean(value) truthiness ko seedhe true/false ke roop mein dikhata hai.
console.log(Boolean(0), Boolean(1)); // false true

