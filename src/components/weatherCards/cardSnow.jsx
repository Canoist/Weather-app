import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

const CardSnow = () => {
    return (
        <Box>
            <CardMedia
                component="img"
                image="./icons/36x36/snow.png"
                sx={{
                    width: "36px",
                    height: "36px",
                    mx: "auto",
                    mb: "2px"
                }}
                alt="Snow"
            />
            <Typography gutterBottom variant="h6" component="span">
                Снег
            </Typography>
        </Box>
    );
};

export default CardSnow;