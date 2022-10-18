const isLegalAge = true;
const firstNumber = 1;
const firstUserName = "Dovydas";
const user = null;
const data = undefined;
const firstArray = [];
const firstObject = {};

const list = [
  isLegalAge,
  firstNumber,
  firstUserName,
  user,
  data,
  firstArray,
  firstObject,
];

console.log(list);

list.forEach((element) => console.log([element, typeof element]));
// typeof null yra object
// array typeof taip pat yra object

//jeigu grieztai tik null

const users = [];

if (users === null) {
}

//jeigu bendrai blogos reiksmes(falsy)

if (!users) {
}

//is esmes tai kaip jungiklis, jeigu reiksme yra truthy, tada paverciama i falsy ir t.t.
//daznai naudojamas if, ar reiksme yra falsy

if (5 !== 4) {
  console.log("nelygu");
}

// if praeis, nes 5 nelygu 4

if (Array.isArray([])) {
}
//tikriname ar masyvas

// 0, '', false, null, undefined ... (MDN falsy values)
const person = null;
if (!person) {
  console.log("tai falsy reiksme");
}

// "tai falsy reiksme"
// reiksmes priespriesa
console.log(!true);
// false

![];
// false
// su booleanais kaip jungiklis
console.log(!false); // true
console.log(!true); // false
