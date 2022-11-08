const express = require("express");
const cors = require("cors");

const PORT = 5000;
const app = express();

const users = [{ name: "Jonas" }, { name: "Tomas" }, { name: "Erika" }];

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send("Sveiki!");
});

app.post("/", (req, res) => {
  const age = req.body?.age || 5; // naudok req.body.age. jei neegzistuoja - naudok 5

  // jei `age` yra truthy reiksme (ne 0, ne null, ne undefined, ne '', ...)
  // const providedAge = age ? age : 0;

  res.send({ ageTimesTwo: age * 2 });
});

// localhost:5000/jonas-152 grąžins { userId: 'jonas-152' }
app.get("/:userId", (req, res) => {
  const userId = +req.params?.userId;

  if (userId <= users.length - 1 && userId >= 0) {
    res.send(users[userId]);
  }

  res.send({ info: "User not found" });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
