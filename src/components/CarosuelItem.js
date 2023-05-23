import { Paper } from "@mui/material";
import { PropTypes } from "prop-types";
import React from "react";

function CarosuelItem({ item }) {
  return (
    <Paper>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "50%", height: "30vw" }}
      />
      <h2>{item.title}</h2>
    </Paper>
  );
}
CarosuelItem.propTypes = {
  item: PropTypes.object,
};
export default CarosuelItem;
