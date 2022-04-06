import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

const CardCloudyRain = () => {
    return (
        <Box>
            <CardMedia
                component="img"
                image="./icons/36x36/cloudy-rain.png"
                sx={{
                    width: "36px",
                    height: "36px",
                    mx: "auto",
                    mb: "2px"
                }}
                alt="Cloudy-rain"
            />
            <Typography gutterBottom variant="h6" component="span">
                Местами дожди
            </Typography>
        </Box>
    );
};

export default CardCloudyRain;
