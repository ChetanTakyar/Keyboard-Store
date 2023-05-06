import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "../components/CarosuelItem";
import CarosuelItemData from "./CarosuelItemData.json";

function Carosuel() {
  return (
    <Carousel>
      {CarosuelItemData.map((item) => (
        <CarouselItem
          key={item.id}
          item={item}
        />
      ))}
    </Carousel>
  );
}

export default Carosuel;
