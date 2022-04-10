import { AppBar, Container, Toolbar } from "@mui/material";
import React, { useState } from "react";
import NavBarDesktop from "./navBarDesktop";
import NavBarMobile from "./navBarMobile";
import NavBarUserInfo from "./navBarUserInfo";

const tabs = ["Main", "Favorites"];
const settings = ["Profile", "Logout"];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ mb: "18px" }}>
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
                    <NavBarUserInfo
                        onClickCloseMenu={handleCloseNavMenu}
                        settings={settings}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
