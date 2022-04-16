import React from "react";
import PropTypes from "prop-types";
import { useWeather } from "../../hooks/useWeather";
import { Collapse } from "@mui/material";
import CardThreeDays from "./cardThreeDays";

const CollapseThreeDays = ({ checked }) => {
    const { weather } = useWeather();
    return (
        <>
            {/* Horizontal, when large screens */}
            <Collapse
                sx={{ display: { xs: "none", lg: "block" }, pb: "140px" }}
                orientation="horizontal"
                in={checked}
            >
                {weather && <CardThreeDays />}
            </Collapse>
            {/* Horizontal, when non-large screens */}
            <Collapse
                sx={{ display: { xs: "block", lg: "none" }, pb: "140px" }}
                in={checked}
            >
                {weather && <CardThreeDays />}
            </Collapse>
        </>
    );
};

CollapseThreeDays.propTypes = {
    checked: PropTypes.bool
};

export default CollapseThreeDays;
