import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, logIn } from "../../store/users";
import { useHistory } from "react-router-dom";
import LinkToForm from "./linkToForm";
import TitleForm from "./titleForm";
import Adornment from "./adornment";
import SignInButton from "./signInButton";
import sxForm from "../styles/sxForm";

const SignInForm = ({ toggleForm }) => {
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const dispatch = useDispatch();
    const loginError = useSelector(getAuthErrors());

    const handleChange = ({ target }) => {
        setData((prev) => ({ ...prev, [target.id]: target.value }));
        setError(null);
    };

    useEffect(() => {
        setError(loginError);
    }, [loginError]);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const redirect = history.location.state
            ? history.location.state.from.pathname
            : "/";
        dispatch(logIn({ payload: data, redirect }));
    };

    return (
        <Box component="form" sx={sxForm} onSubmit={handleSubmit}>
            <TitleForm />
            <TextField
                error={!!error}
                helperText={error || null}
                id="email"
                label="Email"
                placeholder="Youre email"
                variant="standard"
                margin="normal"
                onChange={handleChange}
            />
            <TextField
                error={!!error}
                helperText={error || null}
                id="password"
                label="Password"
                variant="standard"
                margin="normal"
                onChange={handleChange}
                InputProps={{
                    endAdornment: (
                        <Adornment
                            showPassword={showPassword}
                            onClick={handleClickShowPassword}
                        />
                    ),
                    type: showPassword ? "text" : "password"
                }}
            />
            <SignInButton forSignIn={true} />
            <LinkToForm forSignIn={true} toggleForm={toggleForm} />
        </Box>
    );
};
export default SignInForm;

SignInForm.propTypes = {
    toggleForm: PropTypes.func
};
