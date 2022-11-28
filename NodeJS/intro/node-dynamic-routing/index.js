const express = require("express");
require("dotenv").config();

const PORT = +process.env.PORT || 5000;
const users = [];
const app = express();

app.use(express.json());

app.get("/user/:userId", (req, res) => {
  const { userId } = req.params;
  const user = users.find((curUser) => curUser.userId === userId);

  console.info(users);

  res.send(user).end();
});

app.post("/create-user", (req, res) => {
  const { age, firstName, userId } = req.body;

  const isNumber = (value) => {
    return typeof value === "number" && !Number.isNaN(value);
  };

  if (
    typeof firstName !== "string" ||
    typeof userId !== "string" ||
    !isNumber(age)
  ) {
    res.status(400).send({ message: "Invalid user data" }).end();
    return;
  }

  const user = { age, firstName, userId };

  users.push(user);

  res.end();
});

app.listen(PORT, () => console.info(`Server is on ${PORT} port`));
