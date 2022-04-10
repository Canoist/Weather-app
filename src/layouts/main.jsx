import {
    Box,
    Button,
    CircularProgress,
    Container,
    FormControl,
    TextField
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CitySelector from "../components/citySelector";
import CardWeather from "../components/weatherCards/cardWeather";
import getGeolocationService from "../services/getGeolocationService";
import apiData from "../examples/API.example.json";
import getWeatherService from "../services/getWeatherService";

const Main = () => {
    const [city, setCity] = useState("");
    const [currentCity, setCurrentCity] = useState("");
    const [cityName, setCityName] = useState("");
    const [cityList, setCityList] = useState([]);
    const [currentDate, setCurrentDate] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoadWeather, setIsLoadWeather] = useState(false);
    const [weather, setWeather] = useState(false);

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
            console.log(currentWeather);
            setCityName(currentCity.split("_")[0]);
            setWeather(currentWeather);
            setCurrentDate(Date(parseInt(currentWeather.current.dt * 1000)));
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
                {isLoadWeather && <CircularProgress />}
                {weather && (
                    <CardWeather
                        currentWeather={weather.current}
                        api={apiData}
                        name={cityName}
                    />
                )}
                {currentDate}
            </Box>
        </Container>
    );
};
export default Main;
