import express from "express";
import axios from "axios";

const app = express();
const PORT = 5_000;

app.use(express.json());

app.get("/", (req, res) => {
  axios.get("https://api.github.com/users").then((usersResponse) => {
    console.log(usersResponse.data);

    return res.send(usersResponse.data).end();
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
