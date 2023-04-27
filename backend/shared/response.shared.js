const { STRINGS, STATUS_CODE_MSG } = require("./constants.shared");

//for returning the error response
const responseError = (res, err, attempts) => {
  return res.status(err.code || 500).json({
    message: typeof err == "object" ? err.message : err || STRINGS.OOPS,
    attempts,
  });
};

// for returning the success response
const responseSucess = (
  res,
  message = STATUS_CODE_MSG.SUCESS.message,
  data
) => {
  return res
    .status(200)
    .json({ message: message || STATUS_CODE_MSG.SUCESS.message, data });
};

module.exports = {
  responseError,
  responseSucess,
};
