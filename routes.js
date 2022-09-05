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
		let users = [];
		// Read users database
		fs.readFile("users.txt", "utf-8", (err, data) => {
			if (err) {
				console.log("Unable to load users from Database.");
				res.write("<html>");
				res.write("<head>");
				res.write("<title>List of Users</title>");
				res.write("</head>");
				res.write("<body>");
				res.write("<p>Empty user list</p>");
				res.write(
					'<a href="/"><button type="submit">Add new user!</button></a>'
				);
				res.write("</body>");
				res.write("</html>");
				return res.end();
			}
			// Create users list and filter out "\n" entry
			users = data
				.split("\n")
				.filter((user) => user !== "")
				.map((user) => `<li>${user}</li>`)
				.join("");
			console.log(users);
			res.write("<html>");
			res.write("<head>");
			res.write("<title>List of Users</title>");
			res.write("</head>");
			res.write("<body>");
			res.write(`<ul>${users}</ul>`);
			res.write('<a href="/"><button type="submit">Add new user!</button></a>');
			res.write("</body>");
			res.write("</html>");
			return res.end();
		});
	}
	if (url === "/create-user" && method === "POST") {
		let body = [];
		// Listen to data stream and store data
		req.on("data", (chunk) => {
			console.log(chunk);
			body.push(chunk);
		});
		// Save user name when stream ends
		return req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			const name = parsedBody.split("=")[1];
			console.log(name);

			fs.appendFile("users.txt", `${name}\n`, (err) => {
				if (err) throw err;
				console.log("User has been added to database!");
			});
			res.statusCode = 302;
			res.setHeader("Location", "/users");

			return res.end();
		});
	}
};

module.exports = {
	handler: routesHandler,
	message: someText,
};
