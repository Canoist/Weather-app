import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, signUp } from "../../store/users";
import LinkToForm from "./linkToForm";
import TitleForm from "./titleForm";
import Adornment from "./adornment";
import SignInButton from "./signInButton";
import sxForm from "../styles/sxForm";
import TextLastname from "./textLastname";
import TextFirstname from "./textFirstname";

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
        dispatch(signUp(data));
    };

    return (
        <Box component="form" sx={sxForm} onSubmit={handleSubmit(onSubmit)}>
            <TitleForm />
            <TextFirstname error={errors.firstname} register={register} />
            <TextLastname error={errors.lastname} register={register} />
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
                        <Adornment
                            showPassword={showPassword}
                            onClick={handleClickShowPassword}
                        />
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
            <SignInButton forSignIn={false} />
            <LinkToForm forSignIn={false} toggleForm={toggleForm} />
        </Box>
    );
};
export default RegisterForm;

RegisterForm.propTypes = {
    toggleForm: PropTypes.func
};
