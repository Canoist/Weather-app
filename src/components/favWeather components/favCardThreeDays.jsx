import React from "react";
import { Card, Divider, Box } from "@mui/material";
import CardOneOfThreeDays from "../weatherCards/cardOneOfThreeDays";
import PropTypes from "prop-types";

const FavCardThreeDays = ({ favData }) => {
    const { daily } = favData;
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

FavCardThreeDays.propTypes = {
    favData: PropTypes.object
};

export default FavCardThreeDays;
