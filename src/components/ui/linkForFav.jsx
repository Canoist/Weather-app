import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDataStatus } from "../../store/users";

const LinkForFav = () => {
    const isLoggedIn = useSelector(getDataStatus());

    return (
        !isLoggedIn && (
            <Typography
                variant="subtitle2"
                sx={{ textAlign: "center", pb: 1.5 }}
                component="div"
            >
                Чтобы добавить в избранное, необходимо{" "}
                <Link
                    style={{
                        color: "inherit",
                        cursor: "pointer"
                    }}
                    to={"/login"}
                >
                    войти.
                </Link>{" "}
            </Typography>
        )
    );
};
export default LinkForFav;
