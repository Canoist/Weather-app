import { Box, CircularProgress } from "@mui/material";
import React from "react";

const WeatherLoader = () => {
    return (
        <Box
            sx={{
                width: "350px",
                height: "350px",
                m: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <CircularProgress size="70px" />
        </Box>
    );
};
export default WeatherLoader;
