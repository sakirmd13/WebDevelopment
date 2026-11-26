console.log("Hello sakir");

// var in js
var roll = 10;
console.log(roll);
var roll = 20;
console.log(roll);
// var ko redicler intialze and update kar sakte ho

// let in js
let name = "sakir";
console.log(name);
name = "wahid";
console.log(name);
//

// const in js

const address = "tajpur";
console.log(address);

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}
document.querySelectorAll("aside a").forEach((a) =>
  a.addEventListener("click", () => {
    document
      .querySelectorAll("aside a")
      .forEach((x) => x.classList.remove("active"));
    a.classList.add("active");
    if (innerWidth <= 850)
      document.getElementById("sidebar").classList.remove("open");
  }),
);
function animateVariable() {
  const el = document.getElementById("visualText");
  el.innerHTML = "";
  const steps = [
    "Declaration: let age; — binding declare hui",
    "Initialization: age = 24; — value assign hui",
    "Updation: age = 25; — value update hui",
  ];
  steps.forEach((s, i) =>
    setTimeout(() => {
      const box = document.createElement("div");
      box.className = "box";
      box.textContent = s;
      el.appendChild(box);
    }, i * 850),
  );
}
