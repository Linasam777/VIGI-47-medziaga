const http = require("http");
const fs = require("fs");

const PORT = 5000;

const server = http.createServer((req, res) => {
  const headers = { "Content-Type": "text/html" };
  res.writeHead(200, headers);

  const getFile = (filename) => {
    fs.readFile(filename, (error, data) => {
      if (error) {
        res.write(`${filename} doesn't exist.`);
        return res.end();
      }
      res.write(data);
      res.end();
    });
  };

  switch (req.url) {
    case "/garden":
      getFile("./views/FAKE.html");
      break;

    case "/shop":
      res.write("Jono paskaitos - 1e");
      res.end();
      break;

    default:
      fs.readFile("./views/index.html", (error, data) => {
        if (error) {
          res.writeHead(404);
          res.write("File not found");
        } else {
          res.write(data);
        }

        res.end();
      });
      break;
  }
});

server.listen(PORT, console.log(`Server running on port ${PORT}`));
