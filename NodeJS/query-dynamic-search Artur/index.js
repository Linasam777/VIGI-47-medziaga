const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const dbCollection = process.env.dbCollection;
app.use(express.json());

app.get("/users", async (_, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(dbCollection)
      .find()
      .toArray();
    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.get("/filtered-users", async (req, res) => {
  const { name, surname } = req.query; // query skirta filtravimui per url: ?name=  pvz: ?name=Jonas&surname=Naujas
  /*
body: kurti, redaguoti
query: filtruoti
params: pasiekti tam tikrą įrašą
*/
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(dbCollection)
      .find({ name, surname })
      .toArray();

    console.log(name);
    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(dbCollection)
      .findOne({ _id: ObjectId(id) });

    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/user", async (req, res) => {
  const { firstName, lastName } = req?.body || {};
  console.log(req.body);
  if (!firstName || !lastName) {
    res.status(400).send("write first name & last name").end();
    return;
  }

  if (typeof firstName !== "string" && typeof lastName !== "string") {
    res.status(400).send("not numbers only string").end();
    return;
  }
  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DB)
      .collection(dbCollection)
      .insertOne({ name: "Petras", surname: "Slekys" });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
