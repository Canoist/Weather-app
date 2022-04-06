import httpGeoService from "./httpGeoService";

const dataValue = "direct?limit=5&appid=faecc97d406cff294dc52f98401b6587&q=";

const getWeatherService = {
    get: async (payload) => {
        console.log(payload);
        const { data } = await httpGeoService.get(dataValue + payload);
        return data;
    }
};

export default getWeatherService;
