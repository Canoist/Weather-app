import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Divider, IconButton, Menu, Tooltip } from "@mui/material";
import NavBarButton from "./navBarButton";
import { useSelector } from "react-redux";
import { getUser, getDataStatus } from "../../store/users";
import { deepOrange } from "@mui/material/colors";

import NavBarMenuItem from "./navBarMenuItem";

const NavBarUserInfo = ({ settings }) => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const isLoggedIn = useSelector(getDataStatus());
    const currentUser = useSelector(getUser());

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ? (
                <>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>
                                {`${
                                    currentUser.firstname.toUpperCase()[0] +
                                    currentUser.lastname.toUpperCase()[0]
                                }`}
                            </Avatar>
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
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <div key={setting}>
                                <NavBarMenuItem
                                    onClick={handleCloseUserMenu}
                                    setting={setting}
                                />
                                {setting === "Profile" && <Divider />}
                            </div>
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
    settings: PropTypes.array
};

export default NavBarUserInfo;
