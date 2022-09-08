// Be switch suprogramuoti programa, kuri suskirstytu prekes i 3 skirtingas kategorijas pagal kaina:
// [0 - 19]
// (19 - 100]
// (100 - 1000]

const productPrice = (Math.random() * 1_000) | 0;
// const productPrice = +(Math.random() * 1_000).toFixed(2); //+prompt("What is the price of this product?");

// Į sveiką skaičių paverčiam su parseInt() arba | 0
console.info({ productPrice });
if (productPrice >= 0 && productPrice <= 19) {
  console.log("First category");
} else if (productPrice > 19 && productPrice <= 100) {
  console.log("Second category");
} else if (productPrice > 100 && productPrice <= 1_000) {
  console.log("Third category");
} else {
  console.log("No category applied.");
}
