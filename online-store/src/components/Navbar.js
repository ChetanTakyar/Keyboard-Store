import { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Typography } from "@mui/material";

class Navbar extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "primary.main" }}>
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              color="primary.font"
              sx={{ flexGrow: 1, ml: "17%", minWidth: "126px" }}
            >
              Keeb City
            </Typography>
            <Box xs={{ maxWidth: "366px" }}>
              <Button>
                <Typography
                  size="small"
                  variant="body2"
                  color="primary.font"
                  sx={{ flexGrow: 1 }}
                >
                  Group Buy
                </Typography>{" "}
              </Button>
              <Button>
                <Typography
                  size="small"
                  variant="body2"
                  color="primary.font"
                  sx={{ flexGrow: 1 }}
                >
                  In Stock
                </Typography>{" "}
              </Button>
              <Button>
                <Typography
                  size="small"
                  variant="body2"
                  color="primary.font"
                  sx={{ flexGrow: 1 }}
                >
                  Sale
                </Typography>{" "}
              </Button>
              <Button>
                <Typography
                  size="small"
                  variant="body2"
                  color="primary.font"
                  sx={{ flexGrow: 1 }}
                >
                  Contact
                </Typography>{" "}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
export default Navbar;
