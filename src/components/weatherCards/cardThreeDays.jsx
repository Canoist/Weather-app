import React from "react";
import { Card, Divider } from "@mui/material";
import { useWeather } from "../../hooks/useWeather";
import CardOneOfThreeDays from "./cardOneOfThreeDays";

const CardThreeDays = () => {
    const { weather } = useWeather();
    const { daily } = weather;
    return (
        <Card elevation={3} sx={{ mt: 2, maxWidth: 1050, display: "flex" }}>
            <CardOneOfThreeDays day={daily[0]} />
            <Divider orientation="vertical" flexItem />
            <CardOneOfThreeDays day={daily[1]} />
            <Divider orientation="vertical" flexItem />
            <CardOneOfThreeDays day={daily[2]} />
        </Card>
    );
};

CardThreeDays.propTypes = {};

export default CardThreeDays;
