import React from "react";
import PropTypes from "prop-types";
import { Box, Card, CardContent, Typography } from "@mui/material";
import CardWind from "./cardWind";
import CardRouter from "./cardRouter";

const CardWeather = ({ api }) => {
  return (
    <Card elevation={3} sx={{ maxWidth: 345 }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h4" component="h4">
          {api.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <CardRouter api={api} />
          <Box sx={{ textAlign: "left" }}>
            <Typography gutterBottom variant="h5" component="div">
              Днем: {Math.trunc(api.main.temp_max)} {"\u2103"}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              Ночью: {Math.trunc(api.main.temp_min)} {"\u2103"}
            </Typography>
          </Box>
        </Box>
        <CardWind data={api} />
      </CardContent>
    </Card>
  );
};

CardWeather.propTypes = {
  api: PropTypes.object
};

export default CardWeather;
