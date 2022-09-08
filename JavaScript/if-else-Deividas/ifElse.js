const price = prompt("Whats price?");
const isExpensive = price >= 1000;
// Tas pats:
// const isExpensive = price >= 1000? true : false;

console.log({
  isExpensive,
});

if (price >= 100) {
  console.log("Good");
} else {
  console.info("No");
}

// Kas tarp tu skliaustu tikrina true or false
if (isExpensive) {
  console.log("reikia apskaititi preke");
}

const isTaxable = price > 20;

if (isTaxable) {
  alert("Yes");
} else {
  alert("No");
}

const color = prompt("what color?");

if (color === "red" || color === "yellow") {
  console.log("red or yellow");
} else {
  console.log("bad color");
}

const productName = prompt("Apple product");
const isLongName = productName.length >= 7;
console.log(isLongName ? "to long" : "short name");

// tas pats

// if(isLongName) {
//     console.log("To long")
// }
// else {
//     console.log("short Name")
// }

const isImportantProduct = isExpensive && isLongName;

if (isImportantProduct) {
  alert("Need save this");
}
