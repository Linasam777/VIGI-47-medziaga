import express from "express";
import router from "./src/controller/productController.js";

const app = express();
const PORT = 5_000;

app.use("/products", router);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
