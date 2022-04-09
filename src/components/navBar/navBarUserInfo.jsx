import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
    Typography
} from "@mui/material";
import NavBarButton from "./navBarButton";
import { useSelector } from "react-redux";
import { getUser, getIsLoggedIn } from "../../store/users";
import { useHistory } from "react-router-dom";

const NavBarUserInfo = ({ settings, onClickCloseMenu }) => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const isLoggedIn = useSelector(getIsLoggedIn());
    const currentUser = useSelector(getUser());
    const history = useHistory();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = ({ target }) => {
        console.log(target.id);
        if (target.id === "Profile") {
            history.push("/");
        }
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ? (
                <>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar
                                alt={`${currentUser.firstname} ${currentUser.lastname}`}
                            />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right"
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={onClickCloseMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem
                                key={setting}
                                onClick={handleCloseUserMenu}
                            >
                                <Typography textAlign="center" id={setting}>
                                    {setting}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            ) : (
                <NavBarButton page="Login" />
            )}
        </Box>
    );
};

NavBarUserInfo.propTypes = {
    settings: PropTypes.array,
    onClickCloseMenu: PropTypes.func
};

export default NavBarUserInfo;
