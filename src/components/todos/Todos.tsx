import { Box } from "@mui/material";
import React from "react";
import Header from "../header/Header.tsx";

const Todos = () => {
  return (
    <Box p={{ xx: 0, md: 1.5 }} pt={{ xs: 0, md: 2.5 }}>
      <Header />
    </Box>
  );
};
export default Todos;
