import React from "react";
import PropTypes from "prop-types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import CardWind from "./cardWind";
import moment from "moment";
import Alert from "./alert";

const CardWeather = ({ currentWeather, name, alerts }) => {
    return (
        <Card elevation={3} sx={{ maxWidth: 345 }}>
            <CardContent sx={{ textAlign: "center" }}>
                {moment(currentWeather.dt * 1000).format("MM.DD HH:mm")}
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
                    <Box>
                        <CardMedia
                            component="img"
                            image={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                            sx={{
                                width: "36px",
                                height: "36px",
                                mx: "auto",
                                mb: "2px"
                            }}
                            alt={currentWeather.weather[0].description}
                        />
                        <Typography
                            sx={{ textTransform: "capitalize" }}
                            gutterBottom
                            variant="h6"
                            component="span"
                        >
                            {currentWeather.weather[0].description}
                        </Typography>
                    </Box>
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
                    </Box>
                </Box>
                <CardWind data={currentWeather} />
                {alerts &&
                    alerts.map((item, index) =>
                        index % 2 !== 0 ? (
                            <Alert key={item.event} item={item} />
                        ) : null
                    )}
            </CardContent>
        </Card>
    );
};

CardWeather.propTypes = {
    name: PropTypes.string,
    currentWeather: PropTypes.object,
    alerts: PropTypes.array
};

export default CardWeather;
