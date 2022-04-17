import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import moment from "moment";
import Alert from "./alert";
import { useWeather } from "../../hooks/useWeather";
import WeatherIconAndDescription from "./weatherIconAndDescription";
import WeatherWind from "./weatherWind";
import { useDispatch, useSelector } from "react-redux";
import { getDataStatus, getUser, updateUser } from "../../store/users";
import CurrentWeatherBox from "./currentWeatherBox";
import BookmarkButton from "./bookmarkButton";
import LinkForFav from "../ui/linkForFav";

const CardWeather = () => {
    const { weather, cityName } = useWeather();
    const isLoggedIn = useSelector(getDataStatus());
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
                    {moment(currentWeather.dt * 1000).format("DD.MM HH:mm")}
                </Typography>

                {isLoggedIn && (
                    <BookmarkButton
                        bookmark={bookmark}
                        onClick={toggleBookmark}
                    />
                )}

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

            {!isLoggedIn && <LinkForFav />}
        </Card>
    );
};

export default CardWeather;
