class Product {
  price;
  unitsAvailable;

  // yra ir sutrumpinta versija pazengusiems
  constructor(price, unitsAvailable) {
    //konstruktoriai visada klasiu dalis
    this.price = price;
    this.unitsAvailable = unitsAvailable;
  }

  getSumRevenue() {
    return this.price * this.unitsAvailable;
  }
}

const shirt = new Product(50, 150);

console.log(shirt.getSumRevenue());
