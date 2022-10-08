import { Component } from "react";
import {
  Button,
  Typography,
  AppBar,
  Box,
  Toolbar
} from "@mui/material";
import { Link } from "react-router-dom";

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
              component="div"
            >
              Keeb City
            </Typography>
            <Button>Store</Button>
            <Button>Accessories</Button>
            <Button>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}



export default Navbar;