import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";

// Components
import Navbar from "./components/Navbar";

// Pages
import { Contact, GroupBuy, Home, Login, Register, Store } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/store"
              element={<Store />}
            />
            <Route
              path="/group-buy"
              element={<GroupBuy />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
