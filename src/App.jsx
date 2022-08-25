import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Navbar from "./Components/Navbar";
import PublicNavbar from "./Components/PublicNavbar";
import { BASE } from './utils'

function App() {

  return (
    <BrowserRouter>
    <PublicNavbar />
    <div className="main-container">
      <Routes>
        <Route path={BASE} element={<Homepage />} />
        <Route path={BASE + 'login'} element={<Login />} />
        <Route path={BASE + 'register'} element={<Register />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
