import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import ContactForm from "../components/ContactForm";

const Contact = () => {
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
          Contact
        </Typography>
        <ContactForm />
      </Grid>
    </Box>
  );
};

export default Contact;
