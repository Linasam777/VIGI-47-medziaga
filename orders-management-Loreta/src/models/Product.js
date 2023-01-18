import joi from "joi";

const productSchema = joi.object({
  id: joi.number(),
  name: joi.string().required(),
  price: joi.number().required(),
  isAvailable: joi.boolean().required(),
  imageURL: joi.string().required(),
});

export class Product {
  id;
  name;
  price;
  isAvailable;
  imageURL;

  constructor(name, price, isAvailable, imageURL, id) {
    const newProductData = { id, name, price, isAvailable, imageURL };

    const validationResult = productSchema.validate(newProductData);

    if (validationResult.error) {
      throw Error(validationResult.error);
    }

    this.id = id;
    this.name = name;
    this.price = price;
    this.isAvailable = isAvailable;
    this.imageURL = imageURL;
  }
}
