import express from "express";
import { createUser, getUsers } from "../services/userService";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

export default router;
