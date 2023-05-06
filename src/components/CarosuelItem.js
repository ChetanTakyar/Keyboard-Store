import { Paper } from "@mui/material";
import React from "react";

function CarosuelItem(item) {
  return (
    <Paper>
      <img
        src={item.image}
        alt={item.title}
      />
      <h2>{item.title}</h2>
    </Paper>
  );
}
export default CarosuelItem;
