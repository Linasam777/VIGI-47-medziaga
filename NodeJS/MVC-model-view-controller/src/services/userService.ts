import { User } from "../models/User";

const users = [new User("Jonas"), new User("Tomas")];

export const getUsers = (_, res) => {
  res.send({ users }).end();
};

export const createUser = (req, res) => {
  const firstName = req.body.firstName?.trim();

  if (!firstName) {
    return res.status(400).send({ error: "Incorrect firstName" }).end();
  }

  const newUser = new User(firstName);

  users.push(newUser);

  res
    .status(201)
    .send({ message: `User ${firstName} has been created!` })
    .end();
};
