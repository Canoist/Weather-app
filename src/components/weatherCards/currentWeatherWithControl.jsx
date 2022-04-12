import React from "react";
import PropTypes from "prop-types";
import CardWeather from "./cardWeather";
import { Box, FormControlLabel } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const CurrentWeatherCardWithControl = ({ onClick, checked }) => {
    return (
        <Box sx={{ m: 1, ml: "auto" }}>
            <CardWeather />
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

CurrentWeatherCardWithControl.propTypes = {
    onClick: PropTypes.func,
    checked: PropTypes.bool
};

export default CurrentWeatherCardWithControl;
