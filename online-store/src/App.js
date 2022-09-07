import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, colors, ThemeProvider, CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GroupBuy from "./pages/GroupBuy";
import InStock from "./pages/InStock";
import Sale from "./pages/Sale";
import Contact from "./pages/Contact";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          "&:hover": {
            backgroundColor: colors.yellow[700],
            transition: "0.2s",
          },
        }),
      },
    },
  },
  palette: {
    background: {
      default: "#dfdfdf",
    },
    primary: {
      main: colors.orange[500],
      font: "white",
      light: colors.yellow[500],
    },
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/group-buy" element={<GroupBuy />} />
              <Route exact path="/in-stock" element={<InStock />} />
              <Route exact path="/sale" element={<Sale />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
