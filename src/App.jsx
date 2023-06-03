import React from "react";
import { theme } from "./theme/theme";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";

const App = () => {
  return (
    <div className={theme.general}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
