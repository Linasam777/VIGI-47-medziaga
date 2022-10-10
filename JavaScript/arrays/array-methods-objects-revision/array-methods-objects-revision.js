function Car(price, color) {
  this.price = price;
  this.color = color;
}

const premiumCar = new Car(100_000, "red");
const flower = {
  price: 20,
  color: "pink",
};
const car = {
  price: 20_000,
  color: "red",
};
const products = [car];

const addProducts = (productsAmount = 20) => {
  function RandomProduct() {
    const randomNumber = Math.random();
    const roundedNumber = Math.round(randomNumber * 9_000 + 1_000);

    this.price = roundedNumber;

    if (Math.round(randomNumber)) {
      this.color = "black";
    } else {
      this.isAvailable = true;
    }
  }

  for (let index = 0; index < productsAmount; index++) {
    const product = new RandomProduct();
    products.push(product);
  }
};

products.push(premiumCar);

const removeFirstProduct = () => {
  products.shift();
};

removeFirstProduct();

addProducts(15);

console.log(products);

products.forEach((product, productNumber) =>
  console.log({ price: product.price.toFixed(2), productNumber })
);

const getProductsWithNewProductInMiddle = (product) => {
  const halfLengthOfArray = Math.round(products.length / 2);
  const modifiedProducts = products
    .slice(0, halfLengthOfArray)
    .concat([product, ...products.slice(halfLengthOfArray)]);
  //     ...products.slice(0, halfLengthOfArray),
  //     product,
  //     ...products.slice(halfLengthOfArray),
  //   ];

  console.log(modifiedProducts);

  return modifiedProducts;
};

const rearangedProducts = getProductsWithNewProductInMiddle(flower);

console.log(rearangedProducts);
