import httpWeatherService from "./httpWeatherService";

const dataValue =
    "onecall?lang=ru&units=metric&appid=faecc97d406cff294dc52f98401b6587";

const getWetherService = {
    get: async (payload) => {
        console.log(payload);
        const { data } = await httpWeatherService.get(dataValue + payload);
        return data;
    }
};

export default getWetherService;
