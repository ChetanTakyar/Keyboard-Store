import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, colors, ThemeProvider, CssBaseline } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GroupBuy from "./pages/GroupBuy";
import InStock from "./pages/InStock";
import Sale from "./pages/Sale";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
          <div className="App">
            <Navbar/>
          </div>
    );
  }
}

export default App;
