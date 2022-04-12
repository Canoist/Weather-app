import React from "react";
import PropTypes from "prop-types";
import { Box, SvgIcon } from "@mui/material";
import { getWindDirection } from "../../utils/getWindDirection";

const WeatherWind = ({ data }) => {
    return (
        <Box
            sx={{
                display: "inline-block",
                alignItems: "center",
                boxShadow: 2,
                borderRadius: "8px",
                mt: 1,
                p: 2,
                px: 4,
                mx: "auto"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <SvgIcon
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1000 1000"
                    stroke="currentColor"
                    strokeWidth="2"
                    sx={{
                        mr: 0.5,
                        fontSize: "16px",
                        transform: `rotate(${data.wind_deg}deg)`
                    }}
                >
                    <g fill="#48484a">
                        <path d="M510.5,749.6c-14.9-9.9-38.1-9.9-53.1,1.7l-262,207.3c-14.9,11.6-21.6,6.6-14.9-11.6L474,48.1c5-16.6,14.9-18.2,21.6,0l325,898.7c6.6,16.6-1.7,23.2-14.9,11.6L510.5,749.6z"></path>
                    </g>
                </SvgIcon>
                {Math.trunc(data.wind_speed) > 0
                    ? Math.trunc(data.wind_speed)
                    : 1}{" "}
                м/с {getWindDirection(data.wind_deg)}
            </Box>
        </Box>
    );
};

WeatherWind.propTypes = { data: PropTypes.object };

export default WeatherWind;
