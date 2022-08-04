const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Betty Store Server</title></head>");
    res.write(
      "<body><h1>Server Online</h1><p>Betty Store Server is connected and running!</p></body>"
    );
    res.write("</html>");
    return res.end;
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Betty Store Server</title></head>");
  res.write(
    "<body><h1>Server Online</h1><p>Server is under construction!</p></body>"
  );
  res.write("</html>");
  res.end;
});

server.listen(3001);
