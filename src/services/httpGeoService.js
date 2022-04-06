import axios from "axios";
import configFile from "../config.json";

const httpGeo = axios.create({
    baseURL: configFile.apiEndPointGeo
});

const httpGeoService = {
    get: httpGeo.get
};

export default httpGeoService;
