const express = require("express");
const app = express();

// router path and path for api
app.use("/user", require("./user.router"));
app.use("/session", require("./session.router"));

module.exports = app;
