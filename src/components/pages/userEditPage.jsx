import { Box, Button, capitalize, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser, updateUser } from "../../store/users";
import sxForm from "../styles/sxForm";
import ModalWindow from "../ui/modalWindow";

const UserEditPage = () => {
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen((prev) => !prev);
    };

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

    const handleDelete = () => {
        dispatch(deleteUser());
    };

    return (
        <div>
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
                    helperText={
                        errors.firstname ? errors.firstname.message : null
                    }
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
                    helperText={
                        errors.lastname ? errors.lastname.message : null
                    }
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
                        mt: 3
                    }}
                >
                    Обновить данные пользователя
                </Button>
                <Button
                    onClick={handleModal}
                    variant="contained"
                    color="error"
                    sx={{
                        my: 3
                    }}
                >
                    Удалить аккаунт
                </Button>
            </Box>
            <ModalWindow
                open={open}
                onClose={handleModal}
                onDelete={handleDelete}
            />
        </div>
    );
};
export default UserEditPage;
