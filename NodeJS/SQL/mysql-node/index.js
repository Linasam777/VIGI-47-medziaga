const mysql = require("mysql2/promise");
const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

const PORT = 5_004;
const mysqlConfig = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
};

app.post("/table", async (req, res) => {
  const name = req.body?.name.trim();

  if (!name) {
    return res.status(400).send(`Incorrect table name provided: ${name}`).end();
  }

  try {
    const con = await mysql.createConnection(mysqlConfig);

    await con.execute(
      `CREATE table ${name}(id int NOT NULL AUTO_INCREMENT, firstName varchar(35), PRIMARY KEY (id))`
    );

    await con.end();

    res.status(201).send("Table successfully created").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.delete("/table", async (req, res) => {
  const name = req.body?.name?.trim();

  if (!name) {
    return res.status(400).send(`Incorrect table name provided: ${name}`).end();
  }

  try {
    const con = await mysql.createConnection(mysqlConfig);

    await con.execute(`DROP table ${name}`);

    await con.end();

    res.status(202).send("Table successfully dropped").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.post("/user", async (req, res) => {
  const firstName = req.body?.firstName?.trim();
  if (!firstName) {
    // imanoma prideti ilgio patikra, paprastam pavyzdy nebutina
    return res
      .status(400)
      .send(`Incorrect firstName provided: ${firstName}.`)
      .end();
  }

  try {
    const con = await mysql.createConnection(mysqlConfig);

    await con.execute(`INSERT INTO users (firstName) VALUES ('${firstName}')`);
    await con.end();

    res.status(201).send("User successfully created").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
