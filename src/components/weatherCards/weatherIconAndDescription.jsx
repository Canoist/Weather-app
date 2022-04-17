import React from "react";
import PropTypes from "prop-types";
import { Box, CardMedia, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const WeatherIconAndDescription = ({ weather }) => {
    return (
        <Box sx={{ maxWidth: "150px" }}>
            <CardMedia
                component="img"
                image={`http://openweathermap.org/img/wn/${weather.icon}.png`}
                sx={{
                    borderRadius: "50%",
                    bgcolor: grey[400],
                    width: "36px",
                    height: "36px",
                    mx: "auto",
                    mb: "2px",
                    p: 0.5
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
