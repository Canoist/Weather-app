import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CardDay = ({ api }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="Sunny"
        />
        <Typography gutterBottom variant="h5" component="div">
          Ясно
        </Typography>
      </CardContent>
    </Card>
  );
};

CardDay.propTypes = {
  api: PropTypes.object
};

export default CardDay;
