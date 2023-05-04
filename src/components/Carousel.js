import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "../components/CarosuelItem";

function Example(props) {
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item
          key={i}
          item={item}
        />
      ))}
    </Carousel>
  );
}
