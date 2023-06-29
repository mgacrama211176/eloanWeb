import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Clients from "../Clients";
import Dashboard from "../Dashboard";

const UserRoute = ({ user, setUser }) => {
  useEffect(() => {
    setUser(true);
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/clients" element={<Clients />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default UserRoute;
