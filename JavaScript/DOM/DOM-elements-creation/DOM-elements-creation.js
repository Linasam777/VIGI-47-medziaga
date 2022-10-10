const containerElement = document.getElementById("container"); // į ką noriu pridėti
const paragraphElement = document.createElement("p"); // ką noriu pridėti

paragraphElement.append("Jonas");

containerElement.appendChild(paragraphElement);

function showDate() {
  const bodyElement = document.getElementsByTagName("body")[0];

  const paragraphElement = document.createElement("p");

  paragraphElement.append(new Date().toLocaleString(navigator.language));

  bodyElement.appendChild(paragraphElement);
}
