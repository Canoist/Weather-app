import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const CurrentWeatherBox = ({ currentWeather }) => {
    return (
        <Box sx={{ textAlign: "left" }}>
            <Typography gutterBottom variant="h5" component="div">
                {Math.trunc(currentWeather.temp)} {"\u2103"}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
                Ощущается как {Math.trunc(currentWeather.feels_like)} {"\u2103"}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
                Влажность: {Math.trunc(currentWeather.humidity)}%
            </Typography>
        </Box>
    );
};

CurrentWeatherBox.propTypes = {
    currentWeather: PropTypes.object
};

export default CurrentWeatherBox;
