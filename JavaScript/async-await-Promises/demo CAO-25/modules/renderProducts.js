import { onDeleteClick } from "./onDeleteClick.js";

const renderProducts = (products) => {
  const productsContainerElement = document.querySelector(
    "#products-container"
  );

  productsContainerElement.replaceChildren();
  console.log(products);
  products.forEach((product) => {
    const { image, id, title, price } = product; // img = product.img;

    const productContainer = document.createElement("div");
    const deleteButton = document.createElement("button");

    const titleElement = document.createElement("h2");
    const priceElement = document.createElement("p");
    const imgElement = document.createElement("img");

    productContainer.id = `product-${id}`; // kelintas produktas

    deleteButton.innerText = "Ištrinti";
    deleteButton.addEventListener("click", () => onDeleteClick(id));

    titleElement.innerText = title;
    priceElement.innerText = price;
    imgElement.src = image;

    productContainer.append(
      imgElement,
      titleElement,
      priceElement,
      deleteButton
    );
    productsContainerElement.append(productContainer);
  });
};

export { renderProducts };
