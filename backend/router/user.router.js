const express = require("express");
const {
  fetchUserController,
  createUserController,
  updateUserController,
  deleteUserController,
} = require("../controller/user.controller");

const app = express();

app.get("/", fetchUserController);
app.post("/", createUserController);
app.put("/", updateUserController);
app.delete("/", deleteUserController);

module.exports = app;
