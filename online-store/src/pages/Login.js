import { Grid, TextField } from "@mui/material";
import React, { Component } from "react";

export default class Login extends Component {
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
          <TextField
            id="email-login"
            label="Email"
            variant="outlined"></TextField>
          <TextField
            id="password-login"
            label="Password"
            variant="outlined"></TextField>
        </Grid>
      </div>
    );
  }
}
