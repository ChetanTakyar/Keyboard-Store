import { Box } from "@mui/material";
import React from "react";
import Carousel from "../components/Carousel";

import "../App.css";

const Home = () => {
  return (
    <Box id="home-content">
      <h1>Keeb City</h1>
      <p>Welcome to our keyboard store</p>
      <Carousel />
    </Box>
  );
};

export default Home;
