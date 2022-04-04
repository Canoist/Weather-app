import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

const CardCloudy = () => {
  return (
    <Box>
      <CardMedia
        component="img"
        image="./icons/36x36/cloudy.png"
        sx={{
          width: "36px",
          height: "36px",
          mx: "auto",
          mb: "2px"
        }}
        alt="Cloudy"
      />
      <Typography gutterBottom variant="h6" component="span">
        Облачно
      </Typography>
    </Box>
  );
};

export default CardCloudy;
