import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";

const NavBarMobile = ({ tabs, onClickOpen, onClickClose }) => {
    return (
        <>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" }
                }}
            >
                Weather Forecast
            </Typography>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" }
                }}
            >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={onClickOpen}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
            </Box>
        </>
    );
};

NavBarMobile.propTypes = {
    tabs: PropTypes.array,
    onClickOpen: PropTypes.func,
    onClickClose: PropTypes.func
};

export default NavBarMobile;
