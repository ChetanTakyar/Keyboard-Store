import React, { Component } from "react";
import StoreGrid from "../components/StoreGrid";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1> In Stock </h1>
        <StoreGrid />
      </div>
    );
  }
}
