import httpGeoService from "./httpGeoService";

const normalCall = "direct?limit=5&appid=faecc97d406cff294dc52f98401b6587";
const reverseCall = "reverse?limit=1&appid=faecc97d406cff294dc52f98401b6587";

const getGeolocationService = {
    get: async (payload) => {
        const { data } = await httpGeoService.get(
            `${normalCall}&q=${payload},RU`
        );
        return data;
    },
    getReverse: async ({ lat, lon }) => {
        const { data } = await httpGeoService.get(
            `${reverseCall}&lat=${lat}&lon=${lon}`
        );
        return data[0];
    }
};

export default getGeolocationService;
