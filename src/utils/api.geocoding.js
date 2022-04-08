import config from "../../config.json";

const getGeocodeURL = (cityName) => {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${config.API_KEY}`;
};

export default getGeocodeURL;
