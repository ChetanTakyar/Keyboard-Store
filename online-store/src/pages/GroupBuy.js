import React, { Component } from "react";

import { Box, Typography } from "@mui/material";

import StoreGrid from "../components/StoreGrid";

export default class GroupBuy extends Component {
  render() {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center">
        <Typography
          variant="h3"
          component="div"
          padding="50px">
          Group Buy
        </Typography>
        <StoreGrid />
      </Box>
    );
  }
}
