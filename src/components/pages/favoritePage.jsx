import { Container } from "@mui/material";
import React, { useState } from "react";
import { useFavWeather } from "../../hooks/useFavWeather";
import FavCollapseThreeDays from "../favWeather components/favCollapseThreeDays";
import FavWeatherCardWithControl from "../favWeather components/favWeatherCardWithControl";
import WindowLoader from "../windowLoader";

const FavoritePage = () => {
    const [checked, setChecked] = useState([false, false, false]);
    const { favData, isLoaded } = useFavWeather();

    const handleChangeCheck = (id) => {
        const newArr = [false, false, false];
        if (!checked[id]) {
            newArr[id] = true;
        }
        setChecked(newArr);
    };

    return isLoaded ? (
        <WindowLoader open={isLoaded} />
    ) : (
        <Container maxWidth="xl" sx={{ pb: "100px" }}>
            {favData &&
                favData.map((item, index) => (
                    <div key={item.name}>
                        <FavWeatherCardWithControl
                            favData={item}
                            onClick={handleChangeCheck}
                            checked={checked[index]}
                            id={index}
                        />
                        <FavCollapseThreeDays
                            checked={checked[index]}
                            key={item.name}
                            favData={item}
                        />
                    </div>
                ))}
        </Container>
    );
};
export default FavoritePage;
