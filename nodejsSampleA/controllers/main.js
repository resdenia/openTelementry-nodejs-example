const axios = require("axios");
exports.getData = async (req, res, next) => {
	await axios
		.post("http://localhost:5000/", {
			age: 25,
			name: "Tomy",
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
