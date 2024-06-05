import axios from "axios";

const ApiRequest = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

export default ApiRequest;