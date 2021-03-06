const express = require("express");

const regularRoutes = require("./routes/main");

const app = express();
app.use("/public", express.static(__dirname + "/public"));

app.use(express.urlencoded());
app.use(express.json());

app.use(regularRoutes);

app.listen(process.env.PORT || 7777, () => {
	console.log("listen port");
});
