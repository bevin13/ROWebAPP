const userModel = require("../models/user.model");
const { STRINGS } = require("../shared/constants.shared");
const { responseError, responseSucess } = require("../shared/response.shared");
const { getLocalTime } = require("../shared/utils.shared");

const fetchUserController = async (req, res) => {
  try {
    const data = await userModel.find({}).sort({ name: 1 });
    responseSucess(res, STRINGS.FETCH_SUCCESS, data);
  } catch (error) {
    console.log(`Error in fetchUser: ${JSON.stringify(error)}`);
    responseError(res, STRINGS.FETCH_ERROR, error);
  }
};

const createUserController = async (req, res) => {
  try {
    const { name, sessionData, email } = req.body;

    const isUserExist = await userModel.findOne({ email });

    if (isUserExist) throw "User already Exists";

    const userData = {
      name,
      email,
      sessionData,
      lastUpdate: getLocalTime(),
    };
    const uploadData = await userModel.create(userData);
    responseSucess(res, STRINGS.CREATED_SUCCESS, uploadData);
  } catch (error) {
    console.log(`Error in addUser: ${JSON.stringify(error)}`);
    responseError(res, STRINGS.CREATED_ERROR, error);
  }
};

const updateUserController = async (req, res) => {
  try {
    const {
      userId,
      email = "",
      name = "",
      sessionData = {},
      lastSession = "",
    } = req.body;

    if (!userId) throw "User id is required";
    const updatedData = {};

    if (email) updatedData.email = email;
    if (name) updatedData.name = name;
    if (Object.keys(sessionData).length) updatedData.sessionData = sessionData;
    if (lastSession) updatedData.lastSession = lastSession;

    const updateUser = await userModel.updateOne({ _id: userId }, updatedData);
    responseSucess(res, STRINGS.UPDATE_SUCCESS, updateUser);
  } catch (error) {
    console.log(`Error in editUser: ${JSON.stringify(error)}`);
    responseError(res, STRINGS.UPDATE_ERROR, error);
  }
};

const deleteUserController = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) throw "userId is required";
    const deleteUser = await userModel.findByIdAndRemove({ _id: userId });
    responseSucess(res, STRINGS.DELETE, deleteUser);
  } catch (error) {
    console.log(`Error in delete user: ${JSON.stringify(error)}`);
    responseError(res, STRINGS.DELETE_ERROR, error);
  }
};

module.exports = {
  fetchUserController,
  createUserController,
  updateUserController,
  deleteUserController,
};
