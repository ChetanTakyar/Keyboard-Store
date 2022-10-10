import { Component } from "react";
import {
  Button,
  Typography,
  AppBar,
  Box,
  Toolbar
} from "@mui/material";

class Navbar extends Component {
  render() {
    return (
      <Box
        sx={{
          flexGrow: 1
        }}>

        <AppBar>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }}
              variant="h6"
              component="div">
              Keeb City
            </Typography>
            <Button
              variant="text"
              color="inherit">
              Store
            </Button>
            <Button
              variant="text"
              color="inherit">
              Accessories
            </Button>
            <Button
              variant="text"
              color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Navbar;