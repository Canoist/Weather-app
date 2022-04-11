import React from "react";
import { Box, Card, CardContent } from "@mui/material";
import WeatherWind from "./weatherWind";
import { useWeather } from "../../hooks/useWeather";
import WeatherIconAndDescription from "./weatherIconAndDescription";
import DayWeekDescription from "./dayWeekDescription";

const CardThreeDays = () => {
    const { weather } = useWeather();
    const { daily } = weather;
    return (
        <Card elevation={3} sx={{ maxWidth: 345 }}>
            <CardContent sx={{ textAlign: "center" }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around"
                    }}
                >
                    <WeatherIconAndDescription weather={daily[0].weather[0]} />
                    <DayWeekDescription timestamp={daily[0].dt} />
                    {/* СДЕЛАТЬ ДРУГОЙ КОМПОНЕНТ
                    <Box sx={{ textAlign: "left" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {Math.trunc(weather.temp)} {"\u2103"}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="body1"
                            component="div"
                        >
                            Ощущается как {Math.trunc(weather.feels_like)}{" "}
                            {"\u2103"}
                        </Typography>
                    </Box> */}
                </Box>
                <WeatherWind data={weather} />
            </CardContent>
        </Card>
    );
};

CardThreeDays.propTypes = {};

export default CardThreeDays;
