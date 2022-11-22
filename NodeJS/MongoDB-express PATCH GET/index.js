const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");

require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 5000;

// uri turi buti .env
const uri =
  "mongodb+srv://jonas-admin:ca-testuojam@ca.lhfvfsf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.use(express.json());

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const con = await client.connect();
  const db = con.db("NodeJS-demo");

  const user = await db.collection("users").findOne({ _id: ObjectId(id) });

  await con.close();

  res.send(user).end();
});

app.patch("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { age, firstName, lastName } = req.body;

  // todo: test whether age, firstName, lastName are provided properly
  try {
    const con = await client.connect();
    const db = con.db("NodeJS-demo");

    const user = await db
      .collection("users")
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { age, firstName, lastName } }
      );

    await con.close();

    res.send(user).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.post("/collections", async (req, res) => {
  const { tableName } = req.body;

  if (!tableName) {
    return res.status(400).send({ message: "No table name provided." }).end();
  }

  try {
    const con = await client.connect();
    const db = con.db("NodeJS-demo");

    // await db.createCollection(tableName);
    await db.dropCollection(tableName);

    await con.close();
    res.status(201).end();
  } catch (error) {
    res.send({ message: error }).end();
  }
});

app.listen(PORT, async () => {
  console.log(`server is running on ${PORT}`);
});
