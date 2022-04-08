import { DevTool } from "@hookform/devtools";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    TextField,
    Link
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/users";

const ValidateForm = ({ toggleForm }) => {
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {
        console.log("SUBMIT", data);
        dispatch(signUp(data));
    };

    // console.log("ERRORS: ", errors);

    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: 16, // theme.shadows[1]
                color: "primary.main", // theme.palette.primary.main
                my: 2,
                mx: "auto", // margin: theme.spacing(1)
                px: 6.25, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) },
                pt: 3,
                pb: 1,
                zIndex: "tooltip", // theme.zIndex.tooltip
                width: "470px"
            }}
            onSubmit={handleSubmit(onSubmit)}
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
                error={errors["First name"]}
                id="First Name"
                label="First Name"
                variant="standard"
                margin="normal"
                helperText={
                    errors["First name"] ? errors["First name"].message : null
                }
                {...register("First name", {
                    required: {
                        value: true,
                        message: "Поле обязательно для заполнения"
                    },
                    maxLength: 80
                })}
            />
            <TextField
                error={errors["Last name"]}
                helperText={
                    errors["Last name"] ? errors["Last name"].message : null
                }
                id="Last Name"
                label="Last Name"
                variant="standard"
                margin="normal"
                {...register("Last name", {
                    required: {
                        value: true,
                        message: "Поле обязательно для заполнения"
                    },
                    maxLength: 100
                })}
            />
            <TextField
                error={errors.Password}
                helperText={errors.Password ? errors.Password.message : null}
                id="Password"
                label="Password"
                variant="standard"
                margin="normal"
                {...register("Password", {
                    required: {
                        value: true,
                        message: "Поле обязательно для заполнения"
                    },
                    minLength: {
                        value: 8,
                        message: "Минимальная длина пароля 8 символов"
                    },
                    pattern: /\d+/g
                })}
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
            <TextField
                error={errors.Email}
                helperText={errors.Email ? errors.Email.message : null}
                id="Email"
                label="Email"
                placeholder="abc@box.com"
                variant="standard"
                margin="normal"
                {...register("Email", {
                    required: {
                        value: true,
                        message: "Поле обязательно для заполнения"
                    },

                    pattern: {
                        value: /^\S+@\S+\.\S+$/i,
                        message: "Email введен некорректно. Шаблон abc@abc.com"
                    }
                })}
            />
            <Button
                variant="contained"
                type="submit"
                color="warning"
                sx={{
                    mt: 2,
                    mb: 1
                }}
            >
                Register
            </Button>
            <p
                align="center"
                style={{
                    fontWeight: "normal",
                    color: "#23252E"
                }}
            >
                Already have account?{" "}
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
                    Sign in
                </Link>
            </p>
            <DevTool control={control} /> {/* set up the dev tool */}
        </Box>
    );
};
export default ValidateForm;

ValidateForm.propTypes = {
    toggleForm: PropTypes.func
};
