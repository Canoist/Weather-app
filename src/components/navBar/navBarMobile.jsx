import { Box, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import LeftDrawer from "./leftDrawer";
import NavBarButton from "./navBarButton";

const NavBarMobile = ({ tabs, onClickClose, anchor }) => {
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
                    display: { xs: "none", md: "flex" }
                }}
            >
                {tabs.map((tab) => (
                    <NavBarButton
                        otherStyles={{ heigth: "100%" }}
                        key={tab}
                        page={tab}
                        onClickCloseMenu={onClickClose}
                    />
                ))}
            </Box>

            <LeftDrawer
                tabs={tabs}
                closeDrawer={onClickClose}
                isOpenedDrawer={Boolean(anchor)}
            />
        </>
    );
};

NavBarMobile.propTypes = {
    tabs: PropTypes.array,
    onClickClose: PropTypes.func,
    anchor: PropTypes.object
};

export default NavBarMobile;
