const axios = require("axios");

exports.getData = async (req, res, next) => {
	await axios
		.post("http://localhost:6000/", {
			age: 24,
			name: "Tim",
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			throw new Error(error);
		});
	res.sendFile("../view/index.html");
};
exports.postData = (req, res, next) => {
	console.log(res);
};
