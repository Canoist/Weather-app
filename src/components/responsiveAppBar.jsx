import {
  AppBar,
  Box,
  Container,
  IconButton,
  //   Menu,
  //   MenuItem,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import AppBarButton from "./appBarButton";
import AppBarUserInfo from "./appBarUserInfo";
import LeftDrawer from "./leftDrawer";

const tabs = ["Main", "Favorites"];
const settings = ["Profile", "Logout"];

const ResponsiveAppBar = () => {
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Weather Forecast
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <LeftDrawer
              tabs={tabs}
              closeDrawer={handleCloseNavMenu}
              isOpenedDrawer={Boolean(anchorElNav)}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Weather Forecast
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {tabs.map((tab) => (
              <AppBarButton
                key={tab}
                page={tab}
                onClickCloseMenu={handleCloseNavMenu}
              />
            ))}
          </Box>
          <AppBarUserInfo
            onClickCloseMenu={handleCloseNavMenu}
            settings={settings}
            login={true}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
