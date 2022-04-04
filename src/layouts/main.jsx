import { Box, Container } from "@mui/material";
import React from "react";
import CardWeather from "../components/weatherCards/cardWeather";

import apiData from "../examples/API.example.json";

const Main = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <CardWeather api={apiData} />
      </Box>
    </Container>
  );
};
export default Main;
