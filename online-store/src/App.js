import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import StoreGrid from "./components/StoreGrid";
import {
  createTheme,
  colors,
  Box,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

const theme = createTheme({
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Box sx={{ m: 3 }}>
          <StoreGrid />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
