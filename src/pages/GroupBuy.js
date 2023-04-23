import React from "react";

import { Box, Typography } from "@mui/material";

import StoreGrid from "../components/StoreGrid";

const GroupBuy = () => {
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
};

export default GroupBuy;
