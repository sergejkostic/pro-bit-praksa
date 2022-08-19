import "./HomePage.css"
import { useState, useEffect } from "react";
import Hero from "../Sections/Hero";
import HomePageContent from "../Sections/HomePageContent";
import Navbar from "../Sections/Navbar";
import { getUsers } from '../../helper/api';



function HomePage() {


    return (
		<div className='main_container'>
			<div className="header_container">
				<Hero />
				<HomePageContent />
			</div>
		</div>
    )
}


export default HomePage;