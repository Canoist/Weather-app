import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import moment from "moment";
import Alert from "./alert";
import { useWeather } from "../../hooks/useWeather";
import WeatherIconAndDescription from "./weatherIconAndDescription";
import WeatherWind from "./weatherWind";

const CardWeather = () => {
    const { weather, cityName } = useWeather();
    const currentWeather = weather.current;
    return (
        <Card elevation={3} sx={{ maxWidth: 360 }}>
            <CardContent sx={{ textAlign: "center" }}>
                {moment(currentWeather.dt * 1000).format("MM.DD HH:mm")}
                <Typography gutterBottom variant="h4" component="h4">
                    {cityName}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around"
                    }}
                >
                    <WeatherIconAndDescription
                        weather={currentWeather.weather[0]}
                    />
                    <Box sx={{ textAlign: "left" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {Math.trunc(currentWeather.temp)} {"\u2103"}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="body1"
                            component="div"
                        >
                            Ощущается как{" "}
                            {Math.trunc(currentWeather.feels_like)} {"\u2103"}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="body1"
                            component="div"
                        >
                            Влажность: {Math.trunc(currentWeather.humidity)}%
                        </Typography>
                    </Box>
                </Box>
                <WeatherWind data={currentWeather} />
                {weather?.alerts &&
                    weather?.alerts.map((item, index) =>
                        index % 2 !== 0 ? (
                            <Alert key={item.event} item={item} />
                        ) : null
                    )}
            </CardContent>
        </Card>
    );
};

export default CardWeather;
