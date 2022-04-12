import React from "react";
import PropTypes from "prop-types";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import CardDayFeelsLike from "./cardDayFellsLike";
import CardDayTemp from "./cardDayTemp";

const CardDayTable = ({ day }) => {
    return (
        <TableContainer>
            <Table
                sx={{ minWidth: 325, px: 1, mt: 2 }}
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow></TableRow>
                    <TableRow>
                        <TableCell
                            sx={{ px: 0 }}
                            align="center"
                            size="small"
                        ></TableCell>
                        <TableCell
                            sx={{ px: 0, width: "52px" }}
                            size="small"
                            align="center"
                        >
                            Ночь
                        </TableCell>
                        <TableCell
                            sx={{ px: 0, width: "52px" }}
                            size="small"
                            align="center"
                        >
                            Утро
                        </TableCell>
                        <TableCell
                            sx={{ px: 0, width: "52px" }}
                            size="small"
                            align="center"
                        >
                            День
                        </TableCell>
                        <TableCell
                            sx={{ px: 0, width: "52px" }}
                            size="small"
                            align="center"
                        >
                            Вечер
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <CardDayTemp temp={day.temp} />
                    <CardDayFeelsLike feelsLike={day.feels_like} />
                </TableBody>
            </Table>
        </TableContainer>
    );
};

CardDayTable.propTypes = {
    day: PropTypes.object
};

export default CardDayTable;
