import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "fixed",
        display: { xs: "block", md: "flex" },
        alignItems: "center",
        justifyContent: "space-between",
        bottom: "0",
        py: 2,
        bgcolor: "primary.main"
      }}
    >
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
        <Link href="https://www.freepik.com" color="inherit" title="Freepik">
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
    </Container>
  );
};
export default Footer;
