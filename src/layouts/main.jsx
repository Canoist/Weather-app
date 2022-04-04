import { Box, Container } from "@mui/material";
import React from "react";

import apiData from "../examples/API.example.json";

const Main = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <h1>{apiData.name}</h1>
      </Box>
    </Container>
  );
};
export default Main;
