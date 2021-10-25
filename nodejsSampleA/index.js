const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const regularRoutes = require("./routes/main");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(regularRoutes);

app.listen(process.env.PORT || 6000, () => {
	console.log("listen port");
});
