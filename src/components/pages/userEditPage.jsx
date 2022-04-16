import { Box, Button, capitalize, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../store/users";
import sxForm from "../styles/sxForm";

const UserEditPage = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getUser());

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            firstname: capitalize(currentUser.firstname),
            lastname: capitalize(currentUser.lastname)
        }
    });

    const onSubmit = (data) => {
        dispatch(
            updateUser({
                ...currentUser,
                firstname: data.firstname,
                lastname: data.lastname
            })
        );
    };
    return (
        <Box component="form" sx={sxForm} onSubmit={handleSubmit(onSubmit)}>
            <TextField
                error={!!errors.firstname}
                id="firstname"
                label="Имя"
                variant="standard"
                margin="normal"
                sx={{
                    "::first-letter": {
                        textTransform: "uppercase"
                    }
                }}
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

            <Button
                variant="contained"
                type="submit"
                color="warning"
                sx={{
                    my: 3
                }}
            >
                Обновить данные пользователя
            </Button>
        </Box>
    );
};
export default UserEditPage;
