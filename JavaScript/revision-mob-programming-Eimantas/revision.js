const userName = prompt("Type user name");
const userAge = +prompt("Type your age");
const userRegion = navigator.language.toLocaleLowerCase();
const hasAppropriateAge = userAge >= 16;
const isLithuanianUser = userRegion === "lt";

console.log({ userName, userAge });

if (hasAppropriateAge && isLithuanianUser) {
  const firstThreeLetters = userName.slice(0, 3);
  const randomNumber = parseInt(1_000 + Math.random() * 8_999);

  const giftCode = `${firstThreeLetters}${randomNumber}`;

  alert(`Jums priklauso nuolaidu kodas: ${giftCode}`);
}

//todo: user object
