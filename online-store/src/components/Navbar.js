import { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "primary.main" }}>
          <Toolbar>
            <Link to="/">
              <Typography
                variant="h5"
                component="div"
                color="primary.font"
                sx={{ flexGrow: 1, ml: "17%", minWidth: "126px" }}
              >
                Keeb City
              </Typography>
            </Link>
            <Box xs={{ maxWidth: "366px" }}>
              <Link to="/group-buy">
                <Typography
                  size="small"
                  variant="body2"
                  color="primary.font"
                  sx={{ flexGrow: 1 }}
                >
                  Group Buy
                </Typography>
              </Link>
              <Link to="/in-stock">
                <Typography
                  size="small"
                  variant="body2"
                  color="primary.font"
                  sx={{ flexGrow: 1 }}
                >
                  In Stock
                </Typography>
              </Link>
              <Link to="/sale">
                <Typography
                  size="small"
                  variant="body2"
                  color="primary.font"
                  sx={{ flexGrow: 1 }}
                >
                  Sale
                </Typography>
              </Link>
              <Link to="/contact">
                <Typography
                  size="small"
                  variant="body2"
                  color="primary.font"
                  sx={{ flexGrow: 1 }}
                >
                  Contact
                </Typography>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
export default Navbar;
