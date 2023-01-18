import joi from "joi";

const orderSchema = joi.object({
  name: joi.string(),
  orderedAt: joi.string().required(),
  completedAt: joi.string(),
  products: joi.array().required(),
  totalPrice: joi.number().required(),
});

export class Order {
  id;
  name;
  orderedAt;
  completedAt;
  products;
  totalPrice;

  constructor({ id, name, orderedAt, completedAt, products, totalPrice }) {
    //initId, initName,......
    console.log({ id, name, orderedAt, completedAt, products, totalPrice });
    const newOrderData = {
      name,
      orderedAt,
      completedAt,
      products,
      totalPrice,
    };
    const validationResult = orderSchema.validate(newOrderData);

    if (validationResult.error) {
      throw Error(validationResult.error);
    }

    this.id = id;
    this.name = name;
    this.orderedAt = orderedAt;
    this.completedAt = completedAt;
    this.products = products;
    this.totalPrice = totalPrice;
  }
}
