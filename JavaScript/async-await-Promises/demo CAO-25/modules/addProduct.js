const addProductForm = document.body.querySelector("form#add-product-form");

addProductForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // idealiai isskirstyti koda
  const newProductPrice = +document
    .querySelector("#new-product-price-input")
    .value.trim();
  const newProductImage = document
    .querySelector("#new-product-image-input")
    .value.trim();
  const newProductTitle = document
    .querySelector("#new-product-title-input")
    .value.trim();

  try {
    const response = await fetch("https://golden-whispering-show.glitch.me", {
      method: "POST",
      body: JSON.stringify({
        price: newProductPrice,
        title: newProductTitle,
        image: newProductImage,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (response.ok) {
      const route = location.pathname; // pvz. .../addProduct.html
      const redirectRoute = route.replace("addProduct", "index");
      location.assign(redirectRoute);
    }
  } catch (error) {
    console.error(error);
  }
});
