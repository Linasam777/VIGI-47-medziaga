const productsContainer = document.body.querySelector("#products-container");
const colorInput = document.body.querySelector("#color-input");
const headingElement = document.createElement("h1");
const userCustomColor = prompt("Iveskite savo spalva");
const colors = ["red", "green", "blue", "yellow"];
let colorChangeTimes = 0;

colors.push(userCustomColor);

colorInput.addEventListener("input", (event) => {
  const userColorValue = event.target.value.trim().toLocaleLowerCase();

  const isValueColor = colors.includes(userColorValue);

  if (isValueColor) {
    colorChangeTimes++;

    headingElement.textContent = `Pakeitete spalva ${colorChangeTimes}`;

    document.body.prepend(headingElement);

    productsContainer.style.border = `4px dotted ${userColorValue}`;

    console.log("spalva nustatoma");
  }

  switch (userColorValue) {
    case "red":
      console.log("red");
      break;
    case "green":
      console.log("green");
      break;
    case "blue":
      console.log("blue");
      break;
    case "yellow":
      console.log("yellow");
      break;
    default:
      console.log("Nepriimtina spalva");
  }
});
