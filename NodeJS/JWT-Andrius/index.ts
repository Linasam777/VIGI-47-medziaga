import { config } from "dotenv";
config();

import cookieParser from "cookie-parser";
import express from "express";
import { getHome } from "./getHome";
import { signIn } from "./signIn";

const app = express();
const PORT = 5001;

// ne visus routes tikrinam pagal auth, del to .use taikykit pagal poreiki
const isLoggedIn = (req, _, next) => {
  const accessToken = req.headers.authorization;
  const isAuthorized = accessToken; // TODO: JWT validation

  if (!isAuthorized) {
    return next("Unauthorized"); // pateikus argumenta iseina is expresso Router (beveik tas pats kaip app)
  }

  return next();
};

app.use(express.json());
app.use(cookieParser());
app.use(isLoggedIn);

app.get("/welcome", (_, res) => {
  res.send({ message: "Welcome!" });
});

app.get("/home", getHome);
app.post("/sign-in", signIn);

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
