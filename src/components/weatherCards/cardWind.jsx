import React from "react";
import PropTypes from "prop-types";
import { Box, CardMedia, SvgIcon, Typography } from "@mui/material";

const CardWind = ({ data }) => {
    const hardWind = Math.trunc(data.wind.speed) > 8;
    return (
        <Box
            sx={
                hardWind
                    ? {
                          display: "flex",
                          alignItems: "center",
                          boxShadow: 1,
                          borderRadius: "8px",
                          mt: 1,
                          p: 2,
                          width: "100%",
                          mx: "auto"
                      }
                    : {
                          display: "inline-block",
                          alignItems: "center",
                          boxShadow: 1,
                          borderRadius: "8px",
                          mt: 1,
                          p: 2,
                          px: 4,
                          mx: "auto"
                      }
            }
        >
            {hardWind && (
                <Box sx={{ width: "60%" }}>
                    <CardMedia
                        component="img"
                        image="./icons/36x36/wind.png"
                        sx={{
                            width: "36px",
                            height: "36px",
                            mx: "auto",
                            mb: "2px"
                        }}
                        alt="Wind"
                    />
                    <Typography variant="body2" component="span">
                        Сильный ветер!
                    </Typography>
                </Box>
            )}
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
                    sx={{
                        fontSize: "36px",
                        transform: `rotate(${data.wind.deg}deg)`
                    }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7l4-4m0 0l4 4m-4-4v18"
                    />
                </SvgIcon>
            </Box>
            {Math.trunc(data.wind.speed)} м/с
        </Box>
    );
};

CardWind.propTypes = { data: PropTypes.object };

export default CardWind;
