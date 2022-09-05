const fs = require("fs");

const someText = "Welcome!";

const routesHandler = (req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === "/") {
		res.write("<html>");
		res.write("<head>");
		res.write("<title>Add user</title>");

		res.write("</head>");
		res.write("<body>");
		res.write(`<h1>${someText}</h1>`);

		res.write(
			'<form action="/create-user" method="POST"><label for="name">Username</label><input name="username" type="text" /><button type="submit">Submit</button></form>'
		);
		res.write("</body>");

		res.write("</html>");

		return res.end();
	}

	if (url === "/users") {
		res.write("<html>");
		res.write("<head>");
		res.write("<title>List of Users</title>");
		res.write("</head>");
		res.write("<body>");
		res.write("<ul><li>User 1</li><li>User 2</li></ul>");
		res.write("</body>");
		res.write("</html>");
		return res.end();
	}
	if (url === "/create-user" && method === "POST") {
		let body = [];
		req.on("data", (chunk) => {
			console.log(chunk);
			body.push(chunk);
		});
		return req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			const name = parsedBody.split("=")[1];
			console.log(name);
			fs.writeFile("users.txt", name, (err) => {
				res.statusCode = 302;
				res.setHeader("Location", "/users");
				return res.end();
			});
		});
	}
};

module.exports = {
	handler: routesHandler,
	message: someText,
};
