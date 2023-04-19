import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}>
          <Typography
            variant="h3"
            component="div">
            Register Page
          </Typography>
        </Grid>
      </div>
    );
  }
}
