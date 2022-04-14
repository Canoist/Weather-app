import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBarButton = ({ page, onClickCloseMenu, otherStyles }) => {
    return (
        <Button
            sx={{
                py: 3,
                color: "white",
                display: "block",
                ...otherStyles
            }}
        >
            <Link
                onClick={onClickCloseMenu}
                style={{
                    textDecoration: "none",
                    color: "white",
                    textAlign: "center",
                    width: "100%"
                }}
                to={`/${page !== "Main" ? page.toLowerCase() : ""}`}
            >
                <div>{page}</div>
            </Link>
        </Button>
    );
};

NavBarButton.propTypes = {
    page: PropTypes.string,
    onClickCloseMenu: PropTypes.func,
    otherStyles: PropTypes.object
};

export default NavBarButton;
