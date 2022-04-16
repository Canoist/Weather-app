import React from "react";
import PropTypes from "prop-types";
import { Divider, Drawer, List, ListItemText } from "@mui/material";
import NavBarButton from "./navBarButton";

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
            sx={{ display: { md: "none" } }}
            onClose={closeDrawer}
        >
            <List sx={{ width: { xs: "120px", sm: "180px" } }}>
                {tabs.map((tab, index) => (
                    <ListItemText key={tab}>
                        {index === 0 && (
                            <Divider sx={{ borderColor: "text.disabled" }} />
                        )}
                        <NavBarButton
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
