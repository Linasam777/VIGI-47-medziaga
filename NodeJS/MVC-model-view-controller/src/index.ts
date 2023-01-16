import userController from "./controllers/userController";
import express from "express";

const PORT = 5_000;
const app = express();

app.use(express.json());

app.use("/users", userController);
// Router .use

app.listen(PORT, () => console.log(`Server is listening on ${PORT} port.`));
