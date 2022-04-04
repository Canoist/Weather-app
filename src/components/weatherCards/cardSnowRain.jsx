import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

const CardSnowRain = () => {
  return (
    <Box>
      <CardMedia
        component="img"
        image="./icons/36x36/snow-rain.png"
        sx={{
          width: "36px",
          height: "36px",
          mx: "auto",
          mb: "6px"
        }}
        alt="Snow-rain"
      />
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{
          width: "100px",
          lineHeigth: "1.2"
        }}
      >
        Дождь со снегом
      </Typography>
    </Box>
  );
};

export default CardSnowRain;
