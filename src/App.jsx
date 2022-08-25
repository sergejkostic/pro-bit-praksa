import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASE } from './utils'

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Navbar from "./Components/Navbar";
import PublicNavbar from "./Components/PublicNavbar";

const Navigation = ({isAuth}) => {
  if(!isAuth) {
    return <PublicNavbar/>
  }
  return <Navbar/>
}

function App() {
  const isAuth = useSelector(state => !!state.user.jwt)
  return (
    <BrowserRouter>
    <Navigation isAuth={isAuth} />
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
