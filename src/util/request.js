import axios from "axios";
const request = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
});
request.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default request;
