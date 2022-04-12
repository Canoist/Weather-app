import React from "react";
import { Card, Divider, Box } from "@mui/material";
import { useWeather } from "../../hooks/useWeather";
import CardOneOfThreeDays from "./cardOneOfThreeDays";

const CardThreeDays = () => {
    const { weather } = useWeather();
    const { daily } = weather;
    return (
        <Card
            elevation={3}
            sx={{
                mt: 2,
                maxWidth: { lg: 1060, sm: 360 },
                display: { lg: "flex", sm: "block" }
            }}
        >
            <CardOneOfThreeDays day={daily[0]} />
            <Box
                sx={{
                    display: { lg: "block", sm: "none" }
                }}
            >
                <Divider orientation="vertical" flexItem />
            </Box>
            <Box
                sx={{
                    display: { lg: "none", sm: "block" }
                }}
            >
                <Divider />
            </Box>
            <CardOneOfThreeDays day={daily[1]} />
            <Box
                sx={{
                    display: { lg: "block", sm: "none" }
                }}
            >
                <Divider orientation="vertical" flexItem />
            </Box>
            <Box
                sx={{
                    display: { lg: "none", sm: "block" }
                }}
            >
                <Divider />
            </Box>
            <CardOneOfThreeDays day={daily[2]} />
        </Card>
    );
};

CardThreeDays.propTypes = {};

export default CardThreeDays;
