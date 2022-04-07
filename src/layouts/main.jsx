import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    OutlinedInput
} from "@mui/material";
import React, { useState } from "react";
import CardWeather from "../components/weatherCards/cardWeather";

import apiData from "../examples/API.example.json";
import getGeolocationService from "../services/getGeolocationService";

const Main = () => {
    const [city, setCity] = useState("");
    const handleChange = (e) => {
        setCity(e.target.value);
    };
    async function getData(data) {
        try {
            const content = await getGeolocationService.get(data);
            console.log(content);
        } catch (error) {
            console.log(error.message);
        }
    }
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
                        onChange={handleChange}
                        label="Search"
                    />
                    <Button fullWidth={false} variant="contained" type="submit">
                        Найти
                    </Button>
                </FormControl>
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
