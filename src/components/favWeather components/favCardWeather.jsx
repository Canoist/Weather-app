import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../store/users";
import BookmarkButton from "../weatherCards/bookmarkButton";
import WeatherIconAndDescription from "../weatherCards/weatherIconAndDescription";
import CurrentWeatherBox from "../weatherCards/currentWeatherBox";
import WeatherWind from "../weatherCards/weatherWind";
import Alert from "../weatherCards/alert";
import PropTypes from "prop-types";

const FavCardWeather = ({ favData }) => {
    const { weather, name } = favData;
    const currentUser = useSelector(getUser());
    const dispatch = useDispatch();
    const currentWeather = weather.current;

    const isBookmark = !!currentUser?.favorites.filter(
        (item) => item.lat === weather.lat && item.lon === weather.lon
    ).length;

    const [bookmark, setBookmark] = useState(isBookmark);

    const toggleBookmark = () => {
        if (!bookmark) {
            const newUser = {
                ...currentUser,
                favorites: [
                    ...currentUser.favorites,
                    { lat: weather.lat, lon: weather.lon }
                ]
            };
            dispatch(updateUser(newUser));
        } else {
            const newFavorites = currentUser.favorites.filter(
                (item) => item.lat !== weather.lat && item.lon !== weather.lon
            );
            dispatch(
                updateUser({
                    ...currentUser,
                    favorites: [...newFavorites]
                })
            );
        }
        setBookmark((prev) => !prev);
    };

    return (
        <Card elevation={3} sx={{ maxWidth: 360 }}>
            <CardContent sx={{ textAlign: "center", position: "relative" }}>
                <Typography
                    sx={{ py: 8, verticalAlign: "middle" }}
                    component="span"
                >
                    {moment(currentWeather.dt * 1000).format("MM.DD HH:mm")}
                </Typography>

                <BookmarkButton bookmark={bookmark} onClick={toggleBookmark} />

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
                    <WeatherIconAndDescription
                        weather={currentWeather.weather[0]}
                    />
                    <CurrentWeatherBox currentWeather={currentWeather} />
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

FavCardWeather.propTypes = {
    favData: PropTypes.object
};

export default FavCardWeather;
