// Conditional statements condition ke result ke basis par code chalate hain.
// Boolean condition true ho to uska block chalega; false ho to alternate path chalega.

// 1. if...else
// `if` tab chalta hai jab condition true ho. `else` optional fallback hai
// jo tab chalta hai jab `if` ki condition false ho.
// Example: false hone ki wajah se sirf False block chalega.
// if (false) {
//   console.log("In the True block");
// } else {
//   console.log("In the False block");
// }

// Variable ki boolean value ko bhi condition bana sakte hain.
// isLoggedIn true hai, isliye True block chalega.
// const isLoggedIn = true;
// if (isLoggedIn) {
//   console.log("In the True block");
// } else {
//   console.log("In the False block");
// }

// Comparison expression bhi true/false deta hai.
// Temperature 30 ya usse zyada ho to pehla message, warna doosra.
// const temperature = 40;
// if (temperature >= 30) {
//   console.log("It is warm");
// } else {
//   console.log("It is cool");
// }

// 2. if...else if...else
// Conditions upar se neeche check hoti hain. Pehli true condition ka block
// chalta hai; baaki skip hote hain. `else` tab chalta hai jab koi match na ho.
// `===` value aur type dono compare karta hai.
// let day = "Thursday";
// if (day === "Monday") {
//   console.log("1st day of the week");
// } else if (day === "Tuesday") {
//   console.log("2nd day of the week");
// } else if (day === "Wednesday") {
//   console.log("3rd day of the week");
// } else if (day === "Thursday") {
//   console.log("4th day of the week");
// } else if (day === "Friday") {
//   console.log("5th day of the week");
// } else if (day === "Saturday") {
//   console.log("6th day of the week");
// } else if (day === "Sunday") {
//   console.log("7th day of the week");
// } else {
//   console.log("Wrong day");
// }

// 3. Nested if...else
// Nested ka matlab ek if/else ke andar doosra if/else.
// Inner condition tabhi check hoti hai jab outer `if` wala path chalta hai.
// Yahan login ke bina subscription check nahi hota.
// const isLoggedIn = true;
// const hasSubscription = true;
// if (isLoggedIn) {
//   if (hasSubscription) {
//     console.log("You can access premium content");
//   } else {
//     console.log("You don't have premium content");
//   }
// } else {
//   console.log("Please log in");
// }

// Ek aur nested example: logged-in user ke liye subscription aur upgrade
// preference check hoti hai. Har `else` apne matching `if` se juda hota hai.
// const isLoggedIn = true;
// const hasSubscription = false;
// const wantsUpgrade = true;
// if (isLoggedIn) {
//   if (hasSubscription) {
//     console.log("You can access premium content");
//   } else {
//     if (wantsUpgrade) {
//       console.log("Please upgrade your subscription");
//     } else {
//       console.log("You don't have premium content");
//     }
//   }
// } else {
//   console.log("Please log in");
// }

// 4. Code readability
// Consistent indentation, braces, aur meaningful names se code padhna aasaan
// hota hai. Bahut deep nesting ke bajay same decision ko else-if chain bana sakte hain.
// Neeche wala example upar ke nested example jaisa hi result deta hai.
// const isLoggedIn = true;
// const hasSubscription = false;
// const wantsUpgrade = true;
// if (!isLoggedIn) {
//   console.log("Please log in");
// } else if (hasSubscription) {
//   console.log("You can access premium content");
// } else if (wantsUpgrade) {
//   console.log("Please upgrade your subscription");
// } else {
//   console.log("You don't have premium content");
// }

// 5. switch...case
// `switch` ek value ko exact case values se compare karta hai.
// `break` matching case ke baad switch se bahar nikalta hai; warna
// agle case ka code bhi chal sakta hai (fall-through).
// `default` tab chalta hai jab koi case match na ho.
const num = 3;
switch (num) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Unknown number");
}