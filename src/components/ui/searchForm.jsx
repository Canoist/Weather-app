import React from "react";
import PropTypes from "prop-types";
import { Button, FormControl, TextField } from "@mui/material";

const SearchForm = ({ onChange }) => {
    return (
        <FormControl sx={{ m: 1 }}>
            <TextField
                id="search"
                type="search"
                onChange={onChange}
                label="Поиск города"
                sx={{ mb: 1 }}
            />
            <Button variant="contained" type="submit">
                Найти
            </Button>
        </FormControl>
    );
};

SearchForm.propTypes = {
    onChange: PropTypes.func
};

export default SearchForm;
