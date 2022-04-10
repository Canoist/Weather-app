import React from "react";
import PropTypes from "prop-types";
import { Box, Card, CardContent, Typography } from "@mui/material";
import CardWind from "./cardWind";
import CardRouter from "./cardRouter";

const CardWeather = ({ api, currentWeather, name }) => {
    // console.log(currentWeather);

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
                    <CardRouter data={currentWeather} />
                    <Box sx={{ textAlign: "left" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Днем: {Math.trunc(currentWeather.temp)} {"\u2103"}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="body1"
                            component="div"
                        >
                            Ночью: {Math.trunc(api.main.temp_min)} {"\u2103"}
                        </Typography>
                    </Box>
                </Box>
                <CardWind data={currentWeather} />
            </CardContent>
        </Card>
    );
};

CardWeather.propTypes = {
    api: PropTypes.object,
    name: PropTypes.string,
    currentWeather: PropTypes.object
};

export default CardWeather;
