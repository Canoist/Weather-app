import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LeftDrawer from "./leftDrawer";
import PropTypes from "prop-types";

const NavBarDesktop = ({ tabs, onClickOpen, onClickClose, anchor }) => {
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
                <LeftDrawer
                    tabs={tabs}
                    closeDrawer={onClickClose}
                    isOpenedDrawer={Boolean(anchor)}
                />
            </Box>
        </>
    );
};

NavBarDesktop.propTypes = {
    tabs: PropTypes.array,
    onClickOpen: PropTypes.func,
    onClickClose: PropTypes.func,
    anchor: PropTypes.object
};

export default NavBarDesktop;
