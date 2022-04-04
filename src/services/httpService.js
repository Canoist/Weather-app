import axios from "axios";
import configFile from "../config.json";

const http = axios.create({
  baseURL: configFile.apiEndPoint
});

const httpService = {
  get: http.get,
  put: http.put,
  post: http.post,
  delete: http.delete,
  patch: http.patch
};

export default httpService;
