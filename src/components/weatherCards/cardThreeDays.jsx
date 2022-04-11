import React from "react";
import PropTypes from "prop-types";
import {
    Box,
    Card,
    CardContent,
    // CardMedia,
    Typography
} from "@mui/material";
import WeatherWind from "./weatherWind";

const CardThreeDays = ({ weather }) => {
    return (
        <Card elevation={3} sx={{ maxWidth: 345 }}>
            <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h4" component="h4">
                    {name}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around"
                    }}
                >
                    {/* В ОТДЕЛЬНЫЙ КОМПОНЕНТ
                    <Box>
                        <CardMedia
                            component="img"
                            image={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                            sx={{
                                width: "36px",
                                height: "36px",
                                mx: "auto",
                                mb: "2px"
                            }}
                            alt={weather.weather[0].description}
                        />
                        <Typography
                            sx={{ textTransform: "capitalize" }}
                            gutterBottom
                            variant="h6"
                            component="span"
                        >
                            {weather.weather[0].description}
                        </Typography>
                    </Box> */}

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

CardThreeDays.propTypes = {
    weather: PropTypes.object
};

export default CardThreeDays;
