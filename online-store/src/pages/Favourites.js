import { Box } from "@mui/material";
import React from "react";
import FavouritesItem from "../components/FavouritesItem";

const Favourites = () => {
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
};

export default Favourites;
