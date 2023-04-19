import { Box, Button } from "@mui/material";
import React from "react";

export default function FavouritesList() {
  return (
    <Box flexGrow={1}>
      <Box
        flexDirection="row"
        sx={{ display: "flex" }}>
        <img src="https://m.media-amazon.com/images/I/61GnUc9e7VL._AC_SL1500_.jpg"></img>
        <p>Amazon Keyboard</p>
        <Button>Add to Cart</Button>
      </Box>
    </Box>
  );
}
