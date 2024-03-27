import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
