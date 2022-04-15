import React from "react";
import { useFavWeather } from "../hooks/useFavoriteWeather";

const Favorites = () => {
    const { favData, isLoaded } = useFavWeather();
    if (!isLoaded) {
        console.log(favData);
    }
    return !isLoaded && <h1>Favorites Page</h1>;
};
export default Favorites;
