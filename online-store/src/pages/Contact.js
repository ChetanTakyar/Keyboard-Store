import React, { Component } from "react";

import { Typography } from "@mui/material";

import ContactForm from "../components/ContactForm";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Typography
          variant="h3"
          component="div">
          Contact
        </Typography>
        <ContactForm />
      </div>
    );
  }
}
