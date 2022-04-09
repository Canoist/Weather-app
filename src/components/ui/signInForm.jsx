import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    TextField,
    Link
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, logIn } from "../../store/users";
import { useHistory } from "react-router-dom";

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
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: 16, // theme.shadows[1]
                color: "primary.main", // theme.palette.primary.main
                my: 3,
                mx: "auto", // margin: theme.spacing(1)
                px: 6.25, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) },
                pt: 3,
                pb: 1,
                zIndex: "tooltip", // theme.zIndex.tooltip
                width: "470px"
            }}
            onSubmit={handleSubmit}
        >
            <h3
                style={{
                    fontWeight: "bold",
                    color: "#23252E"
                }}
            >
                Welcome to weather forecast
            </h3>
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
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                    type: showPassword ? "text" : "password"
                }}
            />

            <Button
                variant="contained"
                type="submit"
                color="warning"
                sx={{
                    mt: 2,
                    mb: 2
                }}
            >
                Sign in
            </Button>
            <p
                align="center"
                style={{
                    fontWeight: "normal",
                    color: "#23252E"
                }}
            >
                Dont have account?{" "}
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
                    Sign up
                </Link>
            </p>
        </Box>
    );
};
export default SignInForm;

SignInForm.propTypes = {
    toggleForm: PropTypes.func
};
