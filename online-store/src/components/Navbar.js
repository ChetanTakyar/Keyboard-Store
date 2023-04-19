import { mdiAccount } from "@mdi/js";
import Icon from "@mdi/react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <Box
        sx={{
          flexGrow: 1,
        }}>
        <AppBar position="static">
          <Toolbar>
            <Button
              variant="text"
              color="inherit">
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}>
                Keeb City
              </Link>
            </Button>
            <Button
              variant="text"
              color="inherit"
              href="/store">
              Store
            </Button>
            <Button
              variant="text"
              color="inherit"
              href="/group-buy">
              Group Buy
            </Button>
            <Button
              variant="text"
              color="inherit"
              href="/contact">
              Contact
            </Button>
            <Button
              variant="text"
              color="inherit"
              href="/login">
              <Icon
                path={mdiAccount}
                size={1}
                color="inherit"
              />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
