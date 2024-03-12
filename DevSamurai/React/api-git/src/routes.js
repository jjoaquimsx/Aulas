import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/home.jsx"
import RepositoriesPage from "./Pages/repositories-page/repo.jsx";


function Rotas() {
  return <BrowserRouter>
    <Routes>
      <Route path="/repositories" element={<RepositoriesPage />}></Route>
      <Route path="/" element={<Home/>}>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default Rotas;



