import React from "react";
import PropTypes from "prop-types";
import { Divider, Drawer, List, ListItemText } from "@mui/material";
import AppBarButton from "./navBarButton";

const LeftDrawer = ({ isOpenedDrawer, closeDrawer, tabs }) => {
    return (
        <Drawer
            id="menu-appbar"
            anchor="left"
            open={isOpenedDrawer}
            PaperProps={{
                elevation: 3,
                sx: { bgcolor: "primary.main" }
            }}
            onClose={closeDrawer}
        >
            <List sx={{ width: { xs: "120px", sm: "180px", md: "none" } }}>
                {tabs.map((tab) => (
                    <ListItemText key={tab}>
                        <AppBarButton
                            otherStyles={{ width: "100%" }}
                            page={tab}
                            onClickCloseMenu={closeDrawer}
                        />
                        <Divider sx={{ borderColor: "text.disabled" }} />
                    </ListItemText>
                ))}
            </List>
        </Drawer>
    );
};

LeftDrawer.propTypes = {
    isOpenedDrawer: PropTypes.bool,
    closeDrawer: PropTypes.func,
    tabs: PropTypes.array
};

export default LeftDrawer;
