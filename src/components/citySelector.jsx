import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useWeather } from "../hooks/useWeather";

const CitySelector = ({ value, onChange }) => {
    const { cityList } = useWeather();
    return (
        <FormControl sx={{ minWidth: "200px", m: 1 }}>
            <InputLabel id="select-label">Уточните город...</InputLabel>
            <Select
                labelId="select-label"
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
                            value={`${item.label}_${item.lat.toString()}${
                                item.lon
                            }`}
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
    onChange: PropTypes.func
};

export default CitySelector;
