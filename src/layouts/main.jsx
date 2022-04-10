import { Box, Button, Container, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CitySelector from "../components/citySelector";
import CardWeather from "../components/weatherCards/cardWeather";
import getGeolocationService from "../services/getGeolocationService";
import apiData from "../examples/API.example.json";
import getWeatherService from "../services/getWeatherService";

const Main = () => {
    const [city, setCity] = useState("");
    const [currentCity, setCurrentCity] = useState("");
    const [cityList, setCityList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleChangeCity = (e) => {
        setCity(e.target.value);
    };

    const handleChangeCurrent = (event) => {
        setCurrentCity(event.target.value);
    };

    async function getData(data) {
        try {
            const content = await getGeolocationService
                .get(data)
                .then(setIsLoaded(true));
            setCityList(content);
        } catch (error) {
            console.log(error.message);
        }
    }

    async function getDataWeather(data) {
        try {
            const weather = await getWeatherService.get(data);
            return weather;
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(async () => {
        if (isLoaded) {
            const currentWeather = await getDataWeather(
                ...cityList.filter(
                    (city) => city.lat.toString() + city.lon === currentCity
                )
            );
            console.log(currentWeather);
        }
    }, [currentCity]);

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
                        cityList={cityList}
                        onChange={handleChangeCurrent}
                        value={currentCity}
                    />
                )}
                <CardWeather api={apiData} />
            </Box>
        </Container>
    );
};
export default Main;
