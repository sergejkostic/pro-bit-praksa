import { useState } from 'react'
import './App.css'
import Navbar from './Components/Sections/Navbar'
import {
	BrowserRouter,
	Routes,
	Route,
  } from "react-router-dom";
  import HomePage from './Components/Pages/HomePage';
  import HelpPage from './Components/Pages/HelpPage';
  import UserPage from './Components/Pages/UserPage';

function App() {

	return (
		<>
		<BrowserRouter>
		<Navbar/>
		<Routes>
		<Route path="/" element={<HomePage />}/>		
		  <Route path="/test" element={<HelpPage />}/>
		  <Route path="/user" element={<UserPage />}/>
		</Routes>
	  </BrowserRouter>
	  </>
	);
}

export default App;
