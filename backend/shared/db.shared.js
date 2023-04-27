const mongoose = require("mongoose");
const { getLocalTime } = require("./utils.shared");

const connectDatabase = ({ uri }) => {
  return new Promise(async (resolve, reject) => {
    // mongoose.Promise = global.Promise;
    mongoose.set("strictQuery", true);

    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 10000,
      })
      .then(() => {
        console.log(`Connected to MongoDB`);
      })
      .catch((err) => {
        console.log(`Error connecting to MongoDB: ${JSON.stringify(err)}`);
      });

    mongoose.connection
      // Reject if an error occurred when trying to connect to MongoDB
      .on("error", (error) => {
        console.error("Error: connection to DB failed");
        reject(error);
      })
      // Exit Process if there is no longer a Database Connection
      .on("close", () => {
        console.error("Error: Connection to DB lost");
        process.exit(1);
      })
      // Connected to DB
      .once("open", () => {
        resolve(`DB Connected on ${getLocalTime()}`);
      });
  });
};

module.exports = {
  connectDatabase,
};
