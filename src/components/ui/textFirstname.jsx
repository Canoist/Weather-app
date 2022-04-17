import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const TextFirstname = ({ error, register }) => {
    return (
        <TextField
            error={!!error}
            helperText={error ? error.message : null}
            id="firstname"
            label="Имя"
            variant="standard"
            margin="normal"
            {...register("firstname", {
                required: {
                    value: true,
                    message: "Поле обязательно для заполнения"
                },
                maxLength: 80
            })}
        />
    );
};

TextFirstname.propTypes = {
    error: PropTypes.object,
    register: PropTypes.func
};

export default TextFirstname;
