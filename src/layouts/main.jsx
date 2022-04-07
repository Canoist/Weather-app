import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CardWeather from "../components/weatherCards/cardWeather";

import apiData from "../examples/API.example.json";
import getGeolocationService from "../services/getGeolocationService";
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
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="search">Поиск</InputLabel>
                    <OutlinedInput
                        id="search"
                        value={city}
                        onChange={handleChangeCity}
                        label="Search"
                    />
                    <Button fullWidth={false} variant="contained" type="submit">
                        Найти
                    </Button>
                </FormControl>
                {isLoaded && (
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            City
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue="Выберете город..."
                            value={currentCity}
                            label="City"
                            onChange={handleChangeCurrent}
                        >
                            {cityList.map((item) => {
                                return (
                                    <MenuItem
                                        key={item.lat}
                                        value={item.lat.toString() + item.lon}
                                    >
                                        {item.label}, {item.state}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                )}
                <CardWeather api={apiData} />
                <Button
                    onClick={() => {
                        getData(city);
                    }}
                >
                    Tap me!
                </Button>
            </Box>
        </Container>
    );
};
export default Main;
