import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import getWeatherService from "../services/getWeatherService";
import { useSelector } from "react-redux";
import { getUser } from "../store/users";
import getGeolocationService from "../services/getGeolocationService";

const FavoriteWeatherContext = React.createContext();

export const useFavWeather = () => {
    return useContext(FavoriteWeatherContext);
};

const FavWeatherProvider = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(true);
    const [favData, setFavData] = useState([]);
    const { favorites } = useSelector(getUser());

    useEffect(() => {
        setIsLoaded(true);
        if (!favorites.length) {
            setIsLoaded(false);
        }
        if (favorites.length > favData.length) {
            setFavData(() => []);
            favorites.map(async (item) => {
                const weather = await getDataWeather({
                    lat: item.lat,
                    lon: item.lon
                });
                const cityName = await getCityName({
                    lat: item.lat,
                    lon: item.lon
                });
                setFavData((prev) => [
                    ...prev,
                    { name: cityName, weather: weather }
                ]);
            });
        }
    }, [favorites]);

    useEffect(() => {
        if (favorites.length === favData.length) {
            setIsLoaded(false);
        }
    }, [favData]);

    async function getDataWeather(data) {
        try {
            const weather = await getWeatherService.get(data);
            return weather;
        } catch (error) {
            console.log(error.message);
        }
    }

    async function getCityName({ lat, lon }) {
        try {
            const { label } = await getGeolocationService.getReverse({
                lat,
                lon
            });
            return label;
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <FavoriteWeatherContext.Provider
            value={{
                isLoaded,
                favData
            }}
        >
            {children}
        </FavoriteWeatherContext.Provider>
    );
};

FavWeatherProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default FavWeatherProvider;
