const firstName = prompt("Your name");
const headingElement = document.body.querySelector("#seo-heading");
const lastNameInput = document.body.querySelector("#last-name-input");
const userDataForm = document.body.querySelector("#user-data-form");

headingElement.textContent = firstName;

lastNameInput.addEventListener("input", (event) => {
  const lastName = event.target.value.trim();
  console.log({ lastName });

  headingElement.textContent = `${firstName} ${lastName}`;
});

lastNameInput.addEventListener("keydown", function () {
  console.log("Pavarde reiksme pakeista");
});

userDataForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Tipiskai buna addEventListener arba onsubmit atributas. Abieju nerekomenduotina, nes per daug identiskos logikos bus, pavyzdziui: event.preventDefault()

  const favoriteNumberInput = document.body.querySelector("#favorite-number");

  console.log(`Vartotojo megstamiausias skaicius ${favoriteNumberInput.value}`);
});

const onSubmit = (event) => {
  event.preventDefault();

  alert("Sekmingai issiusta");
};
