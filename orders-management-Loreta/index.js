import express from "express";
import dotenv from "dotenv";
import { ordersController } from "./src/controllers/ordersController.js";

dotenv.config();

const app = express();
const PORT = +process.env.PORT || 5_000;

app.use(express.json());
app.use("/orders", ordersController);

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
