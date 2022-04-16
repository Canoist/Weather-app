import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBarButton = ({ page, onClickCloseMenu, otherStyles }) => {
    return (
        <Button
            sx={{
                borderRadius: 0,
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
                    width: "100%"
                }}
                to={`/${page !== "Main" ? page.toLowerCase() : ""}`}
            >
                <div
                    style={{
                        width: "100%",
                        heigth: "100%",
                        padding: "1rem 0"
                    }}
                >
                    {page}
                </div>
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
