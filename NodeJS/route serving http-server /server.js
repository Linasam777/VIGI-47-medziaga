const http = require("http");

const PORT = 5_000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  const endpoint = req.url;
  let responseBody = null;

  switch (endpoint) {
    case "/randomNumber":
      responseBody = `${Math.random() * 15}`;
      break;

    case "/cars":
      responseBody = JSON.stringify(["Tesla", "Audi", "Porsche"]);
      break;

    default:
      responseBody =
        "Kreipkitės į atpažinamą endpointą. (/cars, /randomNumber)";
      break;
  }

  res.statusCode = 200;
  res.end(responseBody);
});

server.listen(PORT, () => {
  console.log(`Server is running.`);
});
