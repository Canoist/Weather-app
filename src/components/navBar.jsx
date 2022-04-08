import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import NavBarButton from "./navBarButton";
import NavBarUserInfo from "./navBarUserInfo";
import NavBarDesktop from "./navBarDesktop";

const tabs = ["Main", "Favorites"];
const settings = ["Profile", "Logout"];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        console.log(event);
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
                        anchor={anchorElNav}
                    />
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
                            display: { xs: "none", md: "flex" }
                        }}
                    >
                        {tabs.map((tab) => (
                            <NavBarButton
                                key={tab}
                                page={tab}
                                onClickCloseMenu={handleCloseNavMenu}
                            />
                        ))}
                    </Box>
                    <NavBarUserInfo
                        onClickCloseMenu={handleCloseNavMenu}
                        settings={settings}
                        login={false}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
