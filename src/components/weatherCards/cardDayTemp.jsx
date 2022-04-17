import React from "react";
import PropTypes from "prop-types";
import { TableCell, TableRow } from "@mui/material";

const CardDayTemp = ({ temp }) => {
    return (
        <TableRow
            sx={{
                "&:last-child td, &:last-child th": {
                    border: 0
                }
            }}
        >
            <TableCell sx={{ px: 0 }} align="center">
                Температура:
            </TableCell>
            <TableCell sx={{ px: 0 }} align="center">
                {Math.trunc(temp.night)} {"\u2103"}
            </TableCell>
            <TableCell sx={{ px: 0 }} align="center">
                {Math.trunc(temp.morn)} {"\u2103"}
            </TableCell>
            <TableCell sx={{ px: 0 }} align="center">
                {Math.trunc(temp.day)} {"\u2103"}
            </TableCell>
            <TableCell sx={{ px: 0 }} align="center">
                {Math.trunc(temp.eve)} {"\u2103"}
            </TableCell>
        </TableRow>
    );
};

CardDayTemp.propTypes = {
    temp: PropTypes.object
};

export default CardDayTemp;
