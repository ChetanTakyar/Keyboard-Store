import { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const textStyle = {
      color: "white",
      variant: "body2",
      textDecoration: "none",
      justifyContent: "flex-end",
    };
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "primary.main" }}>
          <Toolbar>
            <Box xs={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h5"
                  component="div"
                  color="primary.font"
                  sx={{ flexGrow: 1, ml: "17%", minWidth: "126px" }}
                >
                  Keeb City
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{ flexGrow: 1, flexDirection: "row", justifyContent: "end" }}
            >
              <Link to="/group-buy" style={{ textDecoration: "none" }}>
                <Typography style={textStyle}>Group Buy</Typography>
              </Link>
              <Link to="/in-stock" style={{ textDecoration: "none" }}>
                <Typography style={textStyle}>In Stock</Typography>
              </Link>
              <Link to="/sale" style={{ textDecoration: "none" }}>
                <Typography style={textStyle}>Sale</Typography>
              </Link>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Typography style={textStyle}>Contact</Typography>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
export default Navbar;
