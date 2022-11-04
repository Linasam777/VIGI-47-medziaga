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
      } else {
        res.write(data);
      }

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
      getFile("./views/index.html");
      break;
  }
});

server.listen(PORT, console.log(`Server running on port ${PORT}`));
