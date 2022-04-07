import httpGeoService from "./httpGeoService";

const dataValue = "direct?limit=5&appid=faecc97d406cff294dc52f98401b6587&q=";

const getGeolocationService = {
    get: async (payload) => {
        const { data } = await httpGeoService.get(dataValue + payload + ",RU");
        return data;
    }
};

export default getGeolocationService;
