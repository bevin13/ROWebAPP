//to get the local time based on the timezone
const getLocalTime = (date = new Date(), timeZone = "Asia/Calcutta") => {
  return new Date(date).toLocaleString("en-US", {
    timeZone: timeZone,
  });
};

module.exports = {
  getLocalTime,
};
