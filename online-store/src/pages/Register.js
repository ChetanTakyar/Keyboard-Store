import { Grid, TextField, Typography } from "@mui/material";
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
          <Typography
            variant="p"
            component="div">
            Enter your details to create an account with us.
          </Typography>
          <Typography
            variant="p"
            component="div">
            Only your username will be shown to other people.
          </Typography>
          <TextField
            id="name-register"
            label="Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="username-register"
            label="Username"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="email-register"
            label="Email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="password-register"
            label="Password"
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </div>
    );
  }
}
