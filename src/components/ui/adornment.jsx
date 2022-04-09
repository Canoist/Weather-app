import React from "react";
import PropTypes from "prop-types";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Adornment = ({ showPassword, onClick }) => {
    return (
        <InputAdornment position="end">
            <IconButton
                aria-label="toggle password visibility"
                onClick={onClick}
                edge="end"
            >
                {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
        </InputAdornment>
    );
};

Adornment.propTypes = { onClick: PropTypes.func, showPassword: PropTypes.bool };

export default Adornment;
