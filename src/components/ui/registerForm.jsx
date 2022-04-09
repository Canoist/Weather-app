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
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, signUp } from "../../store/users";

const RegisterForm = ({ toggleForm }) => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [authError, setAuthError] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const loginError = useSelector(getAuthErrors());
    useEffect(() => {
        setAuthError(loginError);
    }, [loginError]);

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
                error={!!errors.firstname}
                id="firstname"
                label="Имя"
                variant="standard"
                margin="normal"
                helperText={errors.firstname ? errors.firstname.message : null}
                {...register("firstname", {
                    required: {
                        value: true,
                        message: "Поле обязательно для заполнения"
                    },
                    maxLength: 80
                })}
            />
            <TextField
                error={!!errors.lastname}
                helperText={errors.lastname ? errors.lastname.message : null}
                id="lastname"
                label="Фамилия"
                variant="standard"
                margin="normal"
                {...register("lastname", {
                    required: {
                        value: true,
                        message: "Поле обязательно для заполнения"
                    },
                    maxLength: 100
                })}
            />
            <TextField
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : null}
                id="password"
                label="Пароль"
                variant="standard"
                margin="normal"
                {...register("password", {
                    required: {
                        value: true,
                        message: "Поле обязательно для заполнения"
                    },
                    minLength: {
                        value: 7,
                        message: "Минимальная длина пароля 7 символов"
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
                error={!!errors.email || !!authError}
                helperText={
                    errors.email ? errors.email.message : authError || null
                }
                id="email"
                label="Электронная почта"
                placeholder="abc@box.com"
                variant="standard"
                margin="normal"
                {...register("email", {
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
                Зарегистрироваться
            </Button>
            <p
                align="center"
                style={{
                    fontWeight: "normal",
                    color: "#23252E"
                }}
            >
                Уже есть аккаунт?{" "}
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
                    Войти
                </Link>
            </p>
        </Box>
    );
};
export default RegisterForm;

RegisterForm.propTypes = {
    toggleForm: PropTypes.func
};