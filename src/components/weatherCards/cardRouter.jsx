import React from "react";
import PropTypes from "prop-types";
import CardSunny from "./cardSunny";
import CardRain from "./cardRain";
import CardSnow from "./cardSnow";
import CardCloudy from "./cardCloud";
import CardSnowRain from "./cardSnowRain";
import CardCloudyRain from "./cardCloudyRain";

const CardRouter = ({ api }) => {
    // console.log(api);
    //   const clouds = api.clouds.all;
    //   const rain = Object.keys(api.rain).length;
    //   const temp = api.main.temp;
    const clouds = 80;
    const rain = 1;
    const temp = -2;
    if (clouds >= 80) {
        if (rain) {
            if (temp <= -4) {
                return <CardSnow />;
            } else if (temp <= 3) {
                return <CardSnowRain />;
            } else return <CardRain />;
        }
        return <CardCloudy />;
    } else if (clouds >= 60 && rain) {
        return <CardCloudyRain />;
    }
    return <CardSunny />;
};

CardRouter.propTypes = {
    api: PropTypes.object
};

export default CardRouter;
