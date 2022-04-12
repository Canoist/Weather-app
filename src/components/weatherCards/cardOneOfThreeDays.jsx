import React from "react";
import PropTypes from "prop-types";
import { Box, CardContent, Typography } from "@mui/material";
import WeatherIconAndDescription from "./weatherIconAndDescription";
import DayWeekDescription from "./dayWeekDescription";
import WeatherWind from "./weatherWind";
import CardDayTable from "./cardDayTable";

const CardOneOfThreeDays = ({ day }) => {
    return (
        <CardContent sx={{ textAlign: "center" }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    height: "110px"
                }}
            >
                <WeatherIconAndDescription weather={day.weather[0]} />
                <Box>
                    <DayWeekDescription timestamp={day.dt} />
                    <Typography gutterBottom variant="body1" component="div">
                        Влажность: {Math.trunc(day.humidity)}%
                    </Typography>
                </Box>
            </Box>
            <CardDayTable day={day} />
            <WeatherWind data={day} />
        </CardContent>
    );
};

CardOneOfThreeDays.propTypes = {
    day: PropTypes.object
};

export default CardOneOfThreeDays;
