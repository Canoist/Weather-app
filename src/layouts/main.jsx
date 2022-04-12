import { Box, Button, Container, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import CitySelector from "../components/citySelector";
import { useWeather } from "../hooks/useWeather";
import WeatehrLoader from "../components/weatherCards/weatherLoader";
import CurrentWeatherCardWithControl from "../components/weatherCards/currentWeatherWithControl";
import CollapseThreeDays from "../components/weatherCards/collapseThreeDays";

const Main = () => {
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
                sx={{ display: { lg: "flex", sm: "inline-block" } }}
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    getData(city);
                }}
            >
                <FormControl sx={{ m: 1 }}>
                    <TextField
                        id="search"
                        type="search"
                        onChange={handleChangeCity}
                        label="Search"
                        sx={{ mb: 1 }}
                    />
                    <Button variant="contained" type="submit">
                        Найти
                    </Button>
                </FormControl>
                {isLoaded && (
                    <CitySelector
                        onChange={handleChangeCurrent}
                        value={currentCity}
                    />
                )}
                {isLoadWeather ? (
                    <WeatehrLoader />
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
export default Main;
