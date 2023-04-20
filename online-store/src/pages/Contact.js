import React, { Component } from "react";

import { Box, Typography } from "@mui/material";

import ContactForm from "../components/ContactForm";

export default class Contact extends Component {
  render() {
    return (
      <Box
        border="solid black 1px"
        display="flex"
        flexDirection="column"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        textAlign="center">
        <Typography
          variant="h3"
          component="div">
          Contact
        </Typography>
        <ContactForm />
      </Box>
    );
  }
}
