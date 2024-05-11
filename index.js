const express = require("express");
const { connectDB } = require("../LinkhashBackend/DbConnection/dbConnection");
const bodyParser = require("body-parser");

const routes = require("./router/mainRouter");
const app = express();

const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const http = require("http").createServer(app);

app.get("/", (req, res) => {
  res.send("Welcome to linkedHashBackend");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
connectDB();
const port = process.env.PORT || 8082;
http.listen(port, () =>
  console.log(`Server listening on port http://localhost:${port}`)
);
