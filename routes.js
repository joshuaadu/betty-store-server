const fs = require("fs");

const routes = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Betty Store Server</title></head>");
    res.write("<body>");
    res.write("<h1>Login</h1>");
    res.write("<form action='/auth' method='POST'>");
    res.write(
      "<label for='name'>Username:</label><input type='text' name='name' id='name'/>"
    );
    res.write(
      "<label for='password'>Password:</label><input type='password' name='password' id='password'/>"
    );
    res.write("<button type='submit'>Log In</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");

    return res.end();
  }

  if (url === "/auth" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const ParsedBody = Buffer.concat(body).toString();
      const message = ParsedBody.split("=")[1];
      console.log(ParsedBody);
      fs.writeFile("message.txt", ParsedBody, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");

        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Betty Store Server</title></head>");
  res.write(
    "<body><h1>Server Online</h1><p>Server is under construction!</p></body>"
  );
  res.write("</html>");
  res.end();
};

module.exports = routes;
