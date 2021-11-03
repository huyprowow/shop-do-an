const express = require("express");
// var path = require('path');
var cookieParser = require("cookie-parser");
var cors = require("cors");

var homeRouter = require("./routes/home");
var accountRouter = require("./routes/acount");

const app = express();

app.use(cors());
app.use(cookieParser());

app.use("/api", homeRouter);
app.use("/api/users", accountRouter);

app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

module.exports = app;
