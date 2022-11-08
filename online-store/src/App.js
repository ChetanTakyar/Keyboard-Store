import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
//Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import GroupBuy from "./pages/GroupBuy";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/group-buy" element={<GroupBuy />} />
          </Routes>
        </div>
      </Router>

      
    );
  }
}

export default App;

