import React from "react";
import PropTypes from "prop-types";
import FavCardWeather from "./favCardWeather";
import { Box, FormControlLabel } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const FavWeatherCardWithControl = ({ onClick, checked, favData }) => {
    return (
        <Box sx={{ m: 1, ml: "auto" }}>
            <FavCardWeather favData={favData} />
            <FormControlLabel
                sx={{
                    mt: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "345px"
                }}
                control={!checked ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                onClick={onClick}
                label="Показать/скрыть погоду на 3 дня"
            />
        </Box>
    );
};

FavWeatherCardWithControl.propTypes = {
    onClick: PropTypes.func,
    checked: PropTypes.bool,
    favData: PropTypes.object
};

export default FavWeatherCardWithControl;
