"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { STATUS_CODE_MSG } = require("./shared/constants.shared");
const { connectDatabase } = require("./shared/db.shared");
const { responseError } = require("./shared/response.shared");

const app = express();

const limit = rateLimit({
  max: 1000, // max requests
  windowMs: 5 * 60 * 1000, // 5 min
  message: "Too many requests", // message to send
});

const port = process.env.PORT || 4500;
const uri = process.env.URI || "";
connectDatabase({ uri })
  .then((result) => {
    console.log(`${result}`);
  })
  .catch((err) => {
    console.error(`${err}`);
  });

app.use(
  express.json({
    limit: "50kb",
    extended: false,
    parameterLimit: 50000,
  })
);

const whitelist = ["http://localhost:3000", "*://192.168.*.*"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(null, true);
    }
  },
  credentials: true,

  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
};

app.use("/api", cors(corsOptions), limit, require("./router/index.router"));

/* to handle the not found apis*/
app.use("/", (req, res, next) => {
  console.log({ path: req?._parsedUrl });
  responseError(res, STATUS_CODE_MSG.API_NOT_FOUND);
});

app.use((err, req, res, next) => {
  if (!err) {
    return next();
  }
  responseError(res, new Error(err));
});

/* to handle the unhandledRejection from the nodejs*/
process.on("unhandledRejection", (error) => {
  console.log(error);
  // process.exit();
});

process.on("uncaughtException", function (err) {
  // clean up allocated resources
  // log necessary error details to log files
  // exit the process to avoid unknown state
  console.log(err);
  // process.exit();
});

app.listen(port, () => {
  console.log(`🚀 project running on port: ${port} 🚀`);
});
