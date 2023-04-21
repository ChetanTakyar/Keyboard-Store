import React from "react";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  const onSubmit = () => {
    alert("Submitted!");
  };

  return (
    <Box>
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
        <Box
          display="inline-flex"
          style={{ margin: "10px 0" }}>
          <Button
            variant="contained"
            style={{ margin: "0 10px" }}>
            <Link
              to="/login"
              onClick={onSubmit}
              style={{ color: "inherit", textDecoration: "inherit" }}>
              Submit
            </Link>
          </Button>
          <Button
            variant="contained"
            href="/login"
            style={{ margin: "0 10px" }}>
            Return to Login
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Register;
