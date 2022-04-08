import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

const CardSunny = () => {
    return (
        <Box>
            <CardMedia
                component="img"
                image="./icons/36x36/sunny.png"
                sx={{
                    width: "36px",
                    height: "36px",
                    mx: "auto",
                    mb: "2px"
                }}
                alt="Sunny"
            />
            <Typography gutterBottom variant="h6" component="span">
                Ясно
            </Typography>
        </Box>
    );
};

export default CardSunny;
