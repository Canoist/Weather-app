import React from "react";
import PropTypes from "prop-types";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from "@mui/material";
import { useWeather } from "../hooks/useWeather";

const CitySelector = ({ value, onChange }) => {
    const { cityList } = useWeather();
    if (!cityList.length) {
        return (
            <Typography
                sx={{
                    verticalAlign: "center",
                    my: "auto",
                    ml: 4
                }}
                variant="h5"
                color="red"
            >
                Город введен некорректно
            </Typography>
        );
    }
    return (
        <FormControl sx={{ minWidth: "220px", m: 1 }}>
            <InputLabel id="select-label">Уточните город...</InputLabel>
            <Select
                labelId="select-label"
                id="demo-simple-select"
                defaultValue={`${
                    cityList[0].label
                }_${cityList[0].lat.toString()}${cityList[0].lon}`}
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
