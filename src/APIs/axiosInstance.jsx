import axios from "axios";
import { registerURL, loginURL } from "./ApisURL";

export const register = async (data) => await axios.post(registerURL, data);
export const login = async (data) => await axios.post(loginURL, data);

export const getApiData = async (url, callBack) => {
  try {
    const res = await axios.get(url);
    callBack(res.data.results);
  } catch (error) {
    console.log(error.response);
  }
};
