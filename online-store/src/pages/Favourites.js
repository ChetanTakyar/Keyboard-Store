import { Box } from "@mui/material";
import React, { Component } from "react";
import FavouritesItem from "../components/FavouritesItem";

export default class Favourites extends Component {
  render() {
    return (
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"center"}>
        <FavouritesItem />
        <FavouritesItem />
        <FavouritesItem />
        <FavouritesItem />
        <FavouritesItem />
      </Box>
    );
  }
}
