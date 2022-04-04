import config from "../../config.json";

const fetchURL = (
  lat,
  lon,
  part = "current" || "minutely" || "hourly" || "daily" || "alerts"
) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lang=ru&units=metric&lat=${lat}&lon=${lon}&exclude=${part}&appid=${config.API_KEY}`;
};

export default fetchURL;
