import React from "react";
import PropTypes from "prop-types";
import { Collapse } from "@mui/material";
import FavCardThreeDays from "./favCardThreeDays";

const FavCollapseThreeDays = ({ checked, favData }) => {
    return (
        <>
            {/* Horizontal, when large screens */}
            <Collapse
                sx={{ display: { xs: "none", lg: "block" }, pb: "140px" }}
                orientation="horizontal"
                in={checked}
            >
                <FavCardThreeDays favData={favData.weather} />
            </Collapse>
            {/* Horizontal, when non-large screens */}
            <Collapse
                sx={{ display: { xs: "block", lg: "none" }, pb: "140px" }}
                in={checked}
            >
                <FavCardThreeDays favData={favData.weather} />
            </Collapse>
        </>
    );
};

FavCollapseThreeDays.propTypes = {
    favData: PropTypes.object,
    checked: PropTypes.bool
};

export default FavCollapseThreeDays;
