import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const ContactForm = () => {
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
        justifyContent="center">
        <Typography
          variant="p"
          component="div">
          Got any general enquiries or wanting to know when we restock an item?
        </Typography>
        <Typography
          variant="p"
          component="div">
          Let us know in the form below!
        </Typography>
        <TextField
          id="name-contact"
          label="Name"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="email-contact"
          label="Email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="message-contact"
          label="Message"
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={onSubmit}
          style={{ margin: "10px 0" }}>
          Submit
        </Button>
      </Grid>
    </Box>
  );
};

export default ContactForm;
