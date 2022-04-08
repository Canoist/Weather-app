import httpWeatherService from "./httpWeatherService";

const dataValue =
    "onecall?lang=ru&units=metric&appid=faecc97d406cff294dc52f98401b6587";
// lat=51.5098&lon=-0.1180
const getWeatherService = {
    get: async (payload) => {
        const newPayload = `&lat=${payload.lat}&lon=${payload.lon}`;
        const { data } = await httpWeatherService.get(dataValue + newPayload);
        return data;
    }
};

export default getWeatherService;
