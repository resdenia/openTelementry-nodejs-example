var path = require("path");

const axios = require("axios");

exports.getData = async (req, res, next) => {
	res.sendFile(path.join(__dirname, "../view", "index.html"));

	await axios
		.post("http://localhost:7777/", {
			connected: "To app 7777 from 5555",
		})
		.then(function (response) {
			console.log(response);
			//	res.end("connected");
		})
		.catch(function (error) {
			// throw new Error(error);
			res.status(404);
			res.end("Not-connected");
		});
};

exports.postData = async (req, res, next) => {
	console.log(req.body);
	if (req.body.fromForm) {
		console.log(
			`Hello ${req.body.name} your age is ${req.body.age} this is from the Application A`,
		);
		res.end("sent");
	}
};
