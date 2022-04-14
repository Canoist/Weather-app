import { Box, Button, capitalize, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../store/users";

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
                zIndex: "fab", // theme.zIndex.tooltip
                width: { xs: "220px", sm: "430px", md: "480px" }
            }}
            onSubmit={handleSubmit(onSubmit)}
        >
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
