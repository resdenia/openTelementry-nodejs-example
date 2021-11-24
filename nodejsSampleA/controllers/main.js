var path = require("path");

const axios = require("axios");
exports.getData = async (req, res, next) => {
	res.sendFile(path.join(__dirname, "../view", "index.html"));

	await axios
		.post("http://localhost:5555/", {
			connected: "To app 5555 from 7777",
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			// throw new Error(error);
			res.status(404);
			res.end("Not-connected");
		});
};
exports.postData = (req, res, next) => {
	console.log(req.body);
	if (req.body.fromForm) {
		console.log(
			`Hello ${req.body.name} your age is ${req.body.age} this is from the Application B`,
		);
		res.end("sent");
	}
};
