import { Box, Button, Typography } from "@mui/material";
import React from "react";

const FavouritesItem = () => {
  return (
    <Box
      display={"inline-flex"}
      padding={"10px 0"}>
      <Box
        display="flex"
        height="125px">
        <img
          id="favourites-image"
          src="https://m.media-amazon.com/images/I/61GnUc9e7VL._AC_SL1500_.jpg"></img>
        <Box
          display="flex"
          padding={"0 10px"}
          flexDirection="column"
          justifyContent="center">
          <Typography
            variant="h6"
            component="div"
            style={{ fontWeight: "bold" }}>
            Amazon Keyboard
          </Typography>
          <Typography
            variant="p"
            component="div">
            By Insert Company here
          </Typography>
          <Typography
            variant="p"
            component="div">
            $5,000,000
          </Typography>
        </Box>
        <Box
          spacing={0}
          padding={"0 10px"}
          direction="column"
          alignItems="center"
          display="flex">
          <Button variant="contained">Add to Cart</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FavouritesItem;
