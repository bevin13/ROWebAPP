const {
  fetchAllUsersHelper,
  getNextSessionsHelper,
} = require("../helpers/session.helper");
const { STRINGS } = require("../shared/constants.shared");
const { responseError, responseSucess } = require("../shared/response.shared");

const getNextSessionController = async (req, res) => {
  try {
    const [err, userList] = await fetchAllUsersHelper();
    if (err) throw err;
    const sessionDetails = getNextSessionsHelper(userList);
    let returndata = {
      quiz: sessionDetails.quiz,
      techSession: sessionDetails.techSession,
      nonTechSession: sessionDetails.nonTechSession,
    };
    responseSucess(res, STRINGS.FETCH_SUCCESS, returndata);
  } catch (error) {
    console.log(`Error in getNextSessionController: ${JSON.stringify(error)}`);
    responseError(res, STRINGS.FETCH_ERROR, error);
  }
};

module.exports = {
  getNextSessionController,
};
