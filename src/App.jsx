import React, { useState } from "react";
import { theme } from "./theme/theme";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Forgot from "./Pages/ForgotPass";
import UserRoute from "./Pages/UserPages/UserRoute";

const App = () => {
  const [user, setUser] = useState(false);
  return (
    <div className={theme.general}>
      <BrowserRouter>
        <Navigation user={user} />
        <Routes>
          <Route path="/" element={<Home setUser={setUser} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route
            path="/userRoute/*"
            element={<UserRoute user={user} setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
