const product = {
  color: "red",
  price: 14.99,
};

// Objektai naudojami, kai reikia aprašyti susietus duomenis su tam tikra esybe.
// Pavyzdžiui: vartotojas, kuris turi vardą ir amžių.
const user = {
  firstName: "Jonas",
  age: 23,
};

console.info(user);

product.count = 15; // objektus ir masyvus duomenis galima redaguoti net konstantos atveju
product.color = "green";

console.log(product);
