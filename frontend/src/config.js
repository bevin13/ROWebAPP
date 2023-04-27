const configVal = {
  local: {
    URL: "http://localhost:3040/api",
  },
};

const getConfig = () => {
  return configVal.local;
};

export default getConfig;
