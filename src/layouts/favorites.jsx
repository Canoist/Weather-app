import { Container } from "@mui/material";
import React, { useState } from "react";
import FavCollapseThreeDays from "../components/favWeather components/favCollapseThreeDays";
import FavWeatherCardWithControl from "../components/favWeather components/favWeatherCardWithControl";
import WindowLoader from "../components/windowLoader";
import { useFavWeather } from "../hooks/useFavWeather";

const Favorites = () => {
    const [checked, setChecked] = useState();
    const { favData, isLoaded } = useFavWeather();

    if (!isLoaded) {
        console.log(favData);
    }
    const handleChangeCheck = () => {
        setChecked((prev) => !prev);
    };

    return isLoaded ? (
        <WindowLoader />
    ) : (
        <Container maxWidth="xl">
            {favData &&
                favData.map((item) => (
                    <FavWeatherCardWithControl
                        key={item.name}
                        favData={item}
                        onClick={handleChangeCheck}
                        checked={checked}
                    />
                ))}
            {favData &&
                favData.map((item) => (
                    <FavCollapseThreeDays
                        checked={checked}
                        key={item.name}
                        favData={item}
                    />
                ))}
        </Container>
    );
};
export default Favorites;
