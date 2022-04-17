import React from "react";
import { useSelector } from "react-redux";
import FavoritePage from "../components/pages/favoritePage";
import FavWeatherProvider from "../hooks/useFavWeather";
import { getIsLoggedIn } from "../store/users";

const Favorites = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());

    return (
        isLoggedIn && (
            <FavWeatherProvider>
                <FavoritePage />
            </FavWeatherProvider>
        )
    );
};
export default Favorites;
