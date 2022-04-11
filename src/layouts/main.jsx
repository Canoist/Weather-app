import {
    Box,
    Button,
    CircularProgress,
    Container,
    FormControl,
    TextField
} from "@mui/material";
import React, { useState } from "react";
import CitySelector from "../components/citySelector";
import CardWeather from "../components/weatherCards/cardWeather";
import { useWeather } from "../hooks/useWeather";

const Main = () => {
    const [city, setCity] = useState("");

    const {
        getData,
        isLoadWeather,
        weather,
        isLoaded,
        currentCity,
        setCurrentCity
    } = useWeather();

    const handleChangeCity = (e) => {
        setCity(e.target.value);
    };

    const handleChangeCurrent = (event) => {
        setCurrentCity(event.target.value);
    };

    return (
        <Container maxWidth="xl">
            <Box
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
                {isLoadWeather && <CircularProgress sx={{ ml: 1 }} />}
                {weather && <CardWeather />}
            </Box>
        </Container>
    );
};
export default Main;
