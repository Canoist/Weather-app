import React from "react";
import PropTypes from "prop-types";
import { TableCell, TableRow } from "@mui/material";

const CardDayFeelsLike = ({ feelsLike }) => {
    return (
        <TableRow
            sx={{
                "&:last-child td, &:last-child th": {
                    border: 0
                },
                p: 0
            }}
        >
            <TableCell sx={{ px: 0 }} align="right" size="small">
                Ощущается как:
            </TableCell>
            <TableCell sx={{ px: 0 }} align="center">
                {Math.trunc(feelsLike.night)} {"\u2103"}{" "}
            </TableCell>
            <TableCell sx={{ px: 0 }} align="center">
                {Math.trunc(feelsLike.morn)} {"\u2103"}{" "}
            </TableCell>
            <TableCell sx={{ px: 0 }} align="center">
                {Math.trunc(feelsLike.day)} {"\u2103"}{" "}
            </TableCell>
            <TableCell sx={{ px: 0 }} align="center">
                {Math.trunc(feelsLike.eve)} {"\u2103"}{" "}
            </TableCell>
        </TableRow>
    );
};

CardDayFeelsLike.propTypes = {
    feelsLike: PropTypes.object
};

export default CardDayFeelsLike;
