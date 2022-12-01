const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");

require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 5004;
const uri = process.env.URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.use(express.json());

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const con = await client.connect();
  const db = con.db("NodeJS-demo");

  const user = await db.collection("users").findOne({ _id: ObjectId(id) });

  await con.close();

  res.send(user).end();
});

app.get("/products", async (_, res) => {
  try {
    const getProductsWithCategoryTitle = async () => {
      const productsWithCategory = [];

      const con = await client.connect();

      const dbProducts = await con
        .db("NodeJS-demo")
        .collection("products")
        .find()
        .toArray();

      for (const product of dbProducts) {
        const categoryConnection = await client.connect();

        const category = await categoryConnection
          .db("NodeJS-demo")
          .collection("categories")
          .findOne({
            // algoritmo kompleksiskumas O(1)
            _id: ObjectId(product.category),
          });

        productsWithCategory.push({
          ...product,

          category: {
            title: category.title,
            categoryId: product.category,
          },
        });
      }
      await con.close();

      return productsWithCategory;
    };

    const products = await getProductsWithCategoryTitle();

    res.send({ products }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

/* tingus budas
app.get("/products", async (req, res) => {
  try {
    const con = await client.connect();

    const categories = await con
      .db("NodeJS-demo")
      .collection("categories")
      .find()
      .toArray();

    const dbProducts = await con
      .db("NodeJS-demo")
      .collection("products")
      .find()
      .toArray();

    // TINGUS BUDAS
    const productsWithCategory = dbProducts.map((product) => {
      const { title } = categories.find( // algoritmo kompleksiskumas O(n)
        (category) => category._id.toString() === product.category
      );

      return { ...product, category: title };
    });

    await con.close();

    res.send({ productsWithCategory }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});
*/
app.listen(PORT, async () => {
  console.log(`server is running on ${PORT}`);
});
