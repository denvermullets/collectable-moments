import axios from "axios";
import envConfig from "../envConfig";

const axiosMoment = (token: string | null = null) => {
  if (token) {
    return axios.create({
      baseURL: envConfig.API_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    return axios.create({
      baseURL: envConfig.API_URL,
    });
  }
};

export default axiosMoment;
