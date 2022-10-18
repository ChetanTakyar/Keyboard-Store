import React, { Component } from "react";

import {
  Typography
} from '@mui/material';

import StoreGrid from "../components/StoreGrid";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Typography
          variant="h3"
          component="div">
          Contact
        </Typography>
        <StoreGrid />
      </div>
    );
  }
}
