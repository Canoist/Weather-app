import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

const CardRain = () => {
    return (
        <Box>
            <CardMedia
                component="img"
                image="./icons/36x36/rain.png"
                sx={{
                    width: "36px",
                    height: "36px",
                    mx: "auto",
                    mb: "2px"
                }}
                alt="Rain"
            />
            <Typography gutterBottom variant="h6" component="span">
                Дождь
            </Typography>
        </Box>
    );
};

export default CardRain;
