import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import { useWeather } from "../../hooks/useWeather";
import CitySelector from "../citySelector";
import SearchForm from "../ui/searchForm";
import CollapseThreeDays from "../weatherCards/collapseThreeDays";
import CurrentWeatherCardWithControl from "../weatherCards/currentWeatherWithControl";
import WeatherLoader from "../weatherCards/weatherLoader";

const MainPage = () => {
    const [city, setCity] = useState("");
    const [checked, setChecked] = useState();

    const {
        getData,
        isLoadWeather,
        weather,
        isLoaded,
        currentCity,
        setCurrentCity
    } = useWeather();

    const handleChangeCheck = () => {
        setChecked((prev) => !prev);
    };
    const handleChangeCity = (e) => {
        setCity(e.target.value);
    };

    const handleChangeCurrent = (event) => {
        setCurrentCity(event.target.value);
    };

    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    width: { lg: "1060px" },
                    display: { md: "flex", sm: "inline-block" }
                }}
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    getData(city);
                }}
            >
                <SearchForm onChange={handleChangeCity} />
                {isLoaded && (
                    <CitySelector
                        onChange={handleChangeCurrent}
                        value={currentCity}
                    />
                )}
                {isLoadWeather ? (
                    <WeatherLoader />
                ) : (
                    weather && (
                        <CurrentWeatherCardWithControl
                            onClick={handleChangeCheck}
                            checked={checked}
                        />
                    )
                )}
            </Box>
            <CollapseThreeDays checked={checked} />
        </Container>
    );
};
export default MainPage;
