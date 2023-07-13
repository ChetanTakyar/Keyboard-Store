import { PropTypes } from "prop-types";
import React from "react";

function CarosuelItem({ item }) {
  return (
    <div>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "50%", height: "30vw" }}
      />
      <h2>{item.title}</h2>
    </div>
  );
}
CarosuelItem.propTypes = {
  item: PropTypes.object,
};
export default CarosuelItem;
