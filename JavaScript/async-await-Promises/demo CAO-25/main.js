import { getProducts } from "./modules/getProducts.js";
import { renderProducts } from "./modules/renderProducts.js";

let products = await getProducts();

const onProductDelete = (deletedId) => {
  console.log(products);
  products = products.filter((product) => product.id !== deletedId);

  renderProducts(products);
};

renderProducts(products);

export { onProductDelete };
