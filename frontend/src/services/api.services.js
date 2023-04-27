import axios from "axios";
import getConfig from "../config";

const config = getConfig();

class ApiService {
  axios_get = async (path) => {
    return await axios
      .get(`${config.URL}/${path}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  axios_post = async (path, data) => {
    return await axios
      .post(`${config.URL}/${path}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  axios_put = async (path, data) => {
    return await axios
      .put(`${config.URL}/${path}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export const ApiServiceInstance = new ApiService();
