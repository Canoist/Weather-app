import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import getGeolocationService from "../services/getGeolocationService";
import getWeatherService from "../services/getWeatherService";

const WeatherContext = React.createContext();

export const useWeather = () => {
    return useContext(WeatherContext);
};

const WeatherProvider = ({ children }) => {
    const [currentCity, setCurrentCity] = useState("");
    const [cityName, setCityName] = useState("");
    const [cityList, setCityList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoadWeather, setIsLoadWeather] = useState(false);
    const [weather, setWeather] = useState(false);

    async function getData(data) {
        setIsLoaded(false);
        setCurrentCity("");
        setWeather(false);
        try {
            const content = await getGeolocationService.get(data);
            setCityList(content);
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoaded(true);
        }
    }

    async function getDataWeather(data) {
        setIsLoadWeather(true);
        try {
            const weather = await getWeatherService.get(data);
            return weather;
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoadWeather(false);
        }
    }

    useEffect(async () => {
        if (isLoaded) {
            const currentWeather = await getDataWeather(
                ...cityList.filter(
                    (city) =>
                        city.lat.toString() + city.lon ===
                        currentCity.split("_")[1]
                )
            );
            setCityName(currentCity.split("_")[0]);
            setWeather(currentWeather);
        }
    }, [currentCity]);

    return (
        <WeatherContext.Provider
            value={{
                getData,
                isLoaded,
                isLoadWeather,
                cityList,
                weather,
                cityName,
                currentCity,
                setCurrentCity
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

WeatherProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default WeatherProvider;
