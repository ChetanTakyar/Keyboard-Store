import { Typography } from "@mui/material";
import React, { Component } from "react";
import StoreGrid from "../components/StoreGrid";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Typography xs={{ alignContent: "center" }}> Group Buy </Typography>
        <StoreGrid />
      </div>
    );
  }
}
