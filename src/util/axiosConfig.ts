import axios from "axios";
import envConfig from "../envConfig";

// const axiosMoment = axios.create({
//   baseURL: envConfig.API_URL,
// });

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

// i want to figure out how to slide the token in
// axiosMoment.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default axiosMoment;
