//const productsContainer = document.getElementById("products-container");
//const product = document.getElementsByClassName("product");
const product = document.querySelector(".product"); // tinka visiems id, class, zymoms (body, div)
const bodyElement = document.querySelector("body");
const productsContainer = document.querySelector("#products-container");

console.log(productsContainer);

productsContainer.style = "background-color: red; width:300px; height: 500px;";
product.style = "background-color: green; height:100px; width: 100px";
bodyElement.style = "border: 2px solid green; margin: 0;";
