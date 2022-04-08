import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CitySelector = ({ value, onChange, cityList }) => {
    return (
        <FormControl sx={{ minWidth: "200px" }}>
            <InputLabel id="demo-simple-select-label">
                Уточните город...
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="Выберете город..."
                value={value}
                label="Уточните город..."
                onChange={onChange}
            >
                {cityList.map((item) => {
                    return (
                        <MenuItem
                            key={item.lat}
                            value={item.lat.toString() + item.lon}
                        >
                            {item.label}, {item.state}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

CitySelector.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    cityList: PropTypes.array
};

export default CitySelector;
