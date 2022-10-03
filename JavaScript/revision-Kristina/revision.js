for (let i = 0; i < 100; i++) {
  const isOddNumber = i % 2 === 1;

  if (isOddNumber) console.log(i);
}

let i = 80;

while (i > 0) {
  const isDivisibleByFive = i % 5 === 0;

  if (isDivisibleByFive) {
    console.log(i);
  }

  i--;
}

const names = [
  "Jurga",
  "Jonas",
  "Augustas",
  "Simas",
  "Dalia",
  "Martynas",
  "Rokas",
];

names.forEach((name, i) => {
  if (i % 2 === 0) console.log(name);
});

const userNumber = 5; //+prompt("labas");
const randomNumber = Math.round(Math.random() * 1_000);
const magicNumber = Math.ceil(randomNumber / userNumber);

// alert(magicNumber);
// alert(Math.pow(magicNumber, 4));

const showAlert = (event) => {
  // event.preventDefault();
  alert("Funkcija veikia.");
};
