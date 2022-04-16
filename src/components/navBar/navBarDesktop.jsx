import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";

const NavBarDesktop = ({ onClickOpen }) => {
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

NavBarDesktop.propTypes = {
    onClickOpen: PropTypes.func
};

export default NavBarDesktop;
