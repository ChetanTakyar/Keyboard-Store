import { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

class Navbar extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "primary.main" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              color="primary.font"
              sx={{ flexGrow: 1 }}
            >
              Keeb City
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
export default Navbar;
