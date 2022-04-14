import { Button } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const SignInButton = ({ forSignIn }) => {
    return (
        <Button
            variant="contained"
            type="submit"
            color="warning"
            sx={{
                my: 2
            }}
        >
            {forSignIn ? "Зарегистрироваться" : "Войти"}
        </Button>
    );
};

SignInButton.propTypes = {
    forSignIn: PropTypes.bool
};

export default SignInButton;
