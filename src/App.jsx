import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { store } from "./store/store";
import { Provider } from "react-redux";
import HamburgerMenu from './components/HamburgerMenu';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Box display="flex" flexDirection="row" justifyContent="flex-end">
            <HamburgerMenu />
          </Box>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
