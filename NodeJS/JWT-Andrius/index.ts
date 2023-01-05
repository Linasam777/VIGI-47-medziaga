import { config } from "dotenv";
config();

import cookieParser from "cookie-parser";
import express from "express";
import { getHome } from "./getHome";
import { signIn } from "./signIn";

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cookieParser());

app.get("/home", getHome);
app.post("/sign-in", signIn);

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
