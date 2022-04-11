import {
    Box,
    Collapse,
    Container,
    FormControlLabel,
    Link,
    Typography
} from "@mui/material";
import React, { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Footer = () => {
    const [checked, setChecked] = useState();

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Container
            maxWidth="100vw"
            sx={{
                position: "fixed",
                bottom: "0",
                py: 2,
                bgcolor: "primary.main",
                zIndex: "fab" // theme.zIndex.fab
            }}
        >
            <FormControlLabel
                control={!checked ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                onClick={handleChange}
                label="About this app"
            />
            <Collapse in={checked}>
                <Box>
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                        This web app make by{" "}
                        <Typography
                            variant="h6"
                            component="span"
                            sx={{ ml: ".2rem", textDecoration: "underline" }}
                        >
                            CANOIST
                        </Typography>
                    </Typography>
                </Box>
                <Box>
                    <span>Авторы иконок: </span>
                    <Link
                        href="https://www.flaticon.com/ru/authors/iconixar"
                        title="iconixar"
                        color="inherit"
                    >
                        iconixar
                    </Link>
                    <span>, </span>
                    <Link
                        href="https://www.flaticon.com/ru/authors/tulpahn"
                        color="inherit"
                        title="tulpahn"
                    >
                        tulpahn
                    </Link>
                    <span>, </span>
                    <Link
                        href="https://www.freepik.com"
                        color="inherit"
                        title="Freepik"
                    >
                        Freepik
                    </Link>
                    <span>, </span>
                    <Link
                        href="https://www.flaticon.com/ru/authors/pomicon"
                        color="inherit"
                        title="Pomicon"
                        target="blank"
                    >
                        Pomicon
                    </Link>
                    <span> from </span>
                    <Link
                        href="https://www.flaticon.com/ru/"
                        color="inherit"
                        title="Flaticon"
                    >
                        www.flaticon.com
                    </Link>
                </Box>
            </Collapse>
        </Container>
    );
};
export default Footer;
