import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const TextLastname = ({ error, register }) => {
    return (
        <TextField
            error={!!error}
            helperText={error ? error.message : null}
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
    );
};

TextLastname.propTypes = {
    error: PropTypes.object,
    register: PropTypes.func
};

export default TextLastname;
