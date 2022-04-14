import { AppBar, Container, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users";
import NavBarDesktop from "./navBarDesktop";
import NavBarMobile from "./navBarMobile";
import NavBarUserInfo from "./navBarUserInfo";

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const isLoggedIn = useSelector(getIsLoggedIn());

    const tabs = isLoggedIn ? ["Main", "Favorites"] : ["Main"];
    const settings = ["Profile", "Logout"];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ mb: "18px", px: "15px" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <NavBarDesktop
                        tabs={tabs}
                        onClickOpen={handleOpenNavMenu}
                        onClickClose={handleCloseNavMenu}
                    />
                    <NavBarMobile
                        tabs={tabs}
                        onClickOpen={handleOpenNavMenu}
                        onClickClose={handleCloseNavMenu}
                        anchor={anchorElNav}
                    />
                    <NavBarUserInfo settings={settings} />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
