import React from "react";
import PropTypes from "prop-types";
import { Box, CardMedia, Typography } from "@mui/material";

const WeatherIconAndDescription = ({ weather }) => {
    return (
        <Box>
            <CardMedia
                component="img"
                image={`http://openweathermap.org/img/wn/${weather.icon}.png`}
                sx={{
                    width: "36px",
                    height: "36px",
                    mx: "auto",
                    mb: "2px"
                }}
                alt={weather.description}
            />
            <Typography
                sx={{ textTransform: "capitalize" }}
                gutterBottom
                variant="h6"
                component="span"
            >
                {weather.description}
            </Typography>
        </Box>
    );
};

WeatherIconAndDescription.propTypes = {
    weather: PropTypes.object
};

export default WeatherIconAndDescription;
