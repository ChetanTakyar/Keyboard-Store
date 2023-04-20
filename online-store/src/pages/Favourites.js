import { Box } from "@mui/material";
import React, { Component } from "react";
import FavouritesItem from "../components/FavouritesItem";

export default class Favourites extends Component {
  render() {
    return (
      <Box>
        <FavouritesItem />
      </Box>
    );
  }
}
