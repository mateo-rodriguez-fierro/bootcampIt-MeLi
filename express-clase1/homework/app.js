const express = require("express");
const { router } = require("./routes/Get");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);
//app.use("/", router);
let responseServer = app.listen(
	PORT,
	console.log(`Listening on http://localhost:${PORT}`)
);


module.exports = {
	app,
	responseServer,
};
