import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  SvgIcon,
  Typography
} from "@mui/material";

const CardDay = ({ api }) => {
  console.log(api);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <h1>{api.name}</h1>
        <CardMedia
          component="img"
          image="./icons/36x36/sunny.png"
          sx={{ width: "36px", height: "36px" }}
          alt="Sunny"
        />
        <Typography gutterBottom variant="h5" component="div">
          Ясно
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mr: 0.5
            }}
          >
            N
            <SvgIcon
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              sx={{ fontSize: "36px", transform: `rotate(${api.wind.deg}deg)` }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7l4-4m0 0l4 4m-4-4v18"
              />
            </SvgIcon>
          </Box>
          {Math.trunc(api.wind.speed)} м/с
        </Box>
      </CardContent>
    </Card>
  );
};

CardDay.propTypes = {
  api: PropTypes.object
};

export default CardDay;
