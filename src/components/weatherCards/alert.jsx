import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import FmdBadIcon from "@mui/icons-material/FmdBad";

const Alert = ({ item }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 2
            }}
        >
            <FmdBadIcon color="warning" />
            <Typography
                sx={{
                    "::first-letter": {
                        textTransform: "uppercase"
                    }
                }}
            >
                {item.description}
            </Typography>
        </Box>
    );
};

Alert.propTypes = {
    item: PropTypes.object
};

export default Alert;
