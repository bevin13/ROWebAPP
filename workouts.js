const users = [
  {
    sessionData: {
      quiz: 1,
      techSession: 1,
      nonTechSession: 1,
    },
    name: "Adithya C Alex",
    email: "adithya.c@inapp.com",
    lastUpdate: "4/27/2023, 8:13:03 AM",
    lastSession: "nonTechSession",
  },
  {
    sessionData: {
      quiz: 1,
      techSession: 1,
      nonTechSession: 1,
    },
    name: "Abijeeth HariKumar",
    email: "abhijeeth.h@inapp.com",
    lastUpdate: "4/27/2023, 8:13:56 AM",
    lastSession: "nonTechSession",
  },
  {
    sessionData: {
      quiz: 1,
      techSession: 1,
      nonTechSession: 1,
    },
    name: "Bevin Jospeh",
    email: "bevin.j@inapp.com",
    lastUpdate: "4/27/2023, 8:13:27 AM",
    lastSession: "techSession",
  },
  {
    sessionData: {
      quiz: 1,
      techSession: 1,
      nonTechSession: 1,
    },
    name: "Elvin C Alex",
    email: "elvin.c@inapp.com",
    lastUpdate: "4/27/2023, 8:13:03 AM",
    lastSession: "quiz",
  },
];

const getNextSession = (userList) => {
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
    console.log({ newUserList });

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
      console.log(result);
    }
  }
};

getNextSession(users);
