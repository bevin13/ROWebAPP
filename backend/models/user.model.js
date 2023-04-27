const { default: mongoose } = require("mongoose");
const { getLocalTime } = require("../shared/utils.shared");
const { STATUS } = require("../shared/constants.shared");

const userSchema = new mongoose.Schema(
  {
    name: {
      maxlength: 50,
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
    },
    sessionData: {
      quiz: {
        type: Number,
        required: true,
      },
      techSession: {
        type: Number,
        required: true,
      },
      nonTechSession: {
        type: Number,
        required: true,
      },
    },
    lastSession: {
      type: String,
    },
    lastUpdate: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
