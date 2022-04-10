import React from "react";
import PropTypes from "prop-types";
import { Link } from "@mui/material";

const LinkToForm = ({ forSignIn, toggleForm }) => {
    return (
        <p
            align="center"
            style={{
                fontWeight: "normal",
                color: "#23252E"
            }}
        >
            {forSignIn ? "Еще не с нами?" : "Уже есть аккаунт?"}{" "}
            <Link
                variant="button"
                underline="always"
                onClick={toggleForm}
                style={{
                    fontWeight: "normal",
                    cursor: "pointer",
                    color: "#23252E"
                }}
            >
                {" "}
                {forSignIn ? "Присоединиться" : "Войти"}
            </Link>
        </p>
    );
};

LinkToForm.propTypes = {
    toggleForm: PropTypes.func,
    forSignIn: PropTypes.bool
};

export default LinkToForm;
