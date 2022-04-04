import { Box, Container } from "@mui/material";
import React from "react";
import CardDay from "../components/cardDay";

import apiData from "../examples/API.example.json";

const Main = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <CardDay api={apiData} />
      </Box>
    </Container>
  );
};
export default Main;
