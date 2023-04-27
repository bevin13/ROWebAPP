const express = require("express");
const {
  getNextSessionController,
} = require("../controller/session.controller");

const app = express();

app.get("/", getNextSessionController);

module.exports = app;
