const express = require("express");
const cors = require("cors");

require("dotenv").config();

const PORT = +process.env.PORT || 5000;
const names = ["Birute", "Juozas", "Albinas"];
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send(names).end();
});

app.post("/", (req, res) => {
  const { name } = req.body;
  const isDuplicateName = names.find((curName) => curName === name);

  // if (!name || typeof name !== "string") {
  //   res.status(400).end("Incorrect name provided.");
  //   return;
  // }

  // if (isDuplicateName) {
  //   res.status(400).end("This name already exists.");
  //   return;
  // }

  names.push(name);

  res.send(names).end();
});

app.listen(PORT, () => console.log(`server is running on: ${PORT}`));
