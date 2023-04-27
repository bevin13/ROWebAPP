import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Edit from "../pages/edit";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  );
};

export default AppRoutes;
