const userModel = require("../models/user.model");

const fetchAllUsersHelper = async () => {
  try {
    const allUsers = await userModel.find({}).sort({ name: 1 });
    if (!allUsers.length) throw "No users regosted";
    return [null, allUsers];
  } catch (error) {
    console.log(`Error in fetchAllUserHelper: ${JSON.stringify(error)}`);
    return [error];
  }
};

const getNextSessionsHelper = (userList) => {
  const result = {
    quiz: "",
    quizCount: 0,
    quizFlag: false,
    techSession: "",
    techSessionCount: 0,
    techSessionFlag: false,
    nonTechSession: "",
    nonTechSessionCount: 0,
    nonTechSessionFlag: false,
  };

  const types = ["quiz", "techSession", "nonTechSession"];

  for (let type of types) {
    let newUserList = userList.filter(
      (each) =>
        each.lastSession !== type && !Object.values(result).includes(each.name)
    );

    for (let i = 0; i < newUserList.length; i++) {
      if (!result[`${type}Flag`]) {
        result[`${type}Count`] = newUserList[i].sessionData[type];
        result[`${type}Flag`] = true;
        result[`${type}`] = newUserList[i].name;
      }
      console.log("bdsb", result);
      if (newUserList[i].sessionData[type] < result[`${type}Count`]) {
        console.log("first");
        result[`${type}Count`] = newUserList[i].sessionData[type];
        result[type] = newUserList[i].name;
      }
    }
  }
  return result;
};

module.exports = {
  fetchAllUsersHelper,
  getNextSessionsHelper,
};
