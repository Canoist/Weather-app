import axios from "axios";
import configFile from "../config.json";

const httpWeather = axios.create({
    baseURL: configFile.apiEndPointWeather
});

const httpWeatherService = {
    get: httpWeather.get
};

export default httpWeatherService;
