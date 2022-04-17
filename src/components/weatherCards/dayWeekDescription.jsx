import React from "react";
import PropTypes from "prop-types";
import { translateDayOfTheWeek } from "../../utils/translateDayOfTheWeek";
import moment from "moment";
import { Typography } from "@mui/material";

const DayWeekDescription = ({ timestamp }) => {
    let date = moment(timestamp * 1000).format("DD.MM dd");
    const dayWeekOnRu = translateDayOfTheWeek(date.split(" ")[1]);
    date = date.split(" ");
    date[1] = dayWeekOnRu;
    const newDate = date.join(" ");
    return (
        <Typography gutterBottom variant="h5" component="div">
            {newDate}
        </Typography>
    );
};

DayWeekDescription.propTypes = {
    timestamp: PropTypes.number
};

export default DayWeekDescription;
