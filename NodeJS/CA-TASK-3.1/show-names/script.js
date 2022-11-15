const postNewNameForm = document.body.querySelector("#postNewNameForm");
const HOSTNAME = "http://localhost:5000";
const namesList = document.createElement("ul");
let names = [];

postNewNameForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nameInput = document.body.querySelector("#nameInput");
  const name = nameInput.value.trim();

  try {
    // Pavyzdys, kai naudojami POST metodu grąžinti vardai.
    const response = await fetch(HOSTNAME, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name,
      }),
    });

    names = await response.json();

    await renderNames();

    nameInput.value = "";
  } catch (err) {
    alert(err);
    // throw Error()
  }
});

const renderNames = async (isInitialRender) => {
  if (isInitialRender) {
    const response = await fetch(HOSTNAME);
    names = await response.json();
  }

  const namesContainer = document.querySelector("#namesContainer");
  namesContainer.replaceChildren();

  names.forEach((name) => {
    const nameListEl = document.createElement("li");

    nameListEl.innerText = name;

    namesContainer.append(nameListEl);
  });
};

await renderNames(true);

/* 
// Užkomentuotas pavyzdys, kai naudojame GET metodu grąžintus vardus.
const renderNames = async () => {

  const response = await fetch(HOSTNAME);
  const names = await response.json();

  const namesContainer = document.querySelector("#namesContainer");
  namesContainer.replaceChildren();

  names.forEach((name) => {
    const nameListEl = document.createElement("li");

    nameListEl.innerText = name;

    namesContainer.append(nameListEl);
  });
};

await renderNames();
*/
