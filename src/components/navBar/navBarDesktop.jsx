import { Box, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import NavBarButton from "./navBarButton";

const NavBarDesktop = ({ tabs, onClickOpen, onClickClose }) => {
    return (
        <>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
                Weather Forecast
            </Typography>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" }
                }}
            >
                {tabs.map((tab) => (
                    <NavBarButton
                        key={tab}
                        page={tab}
                        onClickCloseMenu={onClickClose}
                    />
                ))}
            </Box>
        </>
    );
};

NavBarDesktop.propTypes = {
    tabs: PropTypes.array,
    onClickOpen: PropTypes.func,
    onClickClose: PropTypes.func
};

export default NavBarDesktop;
