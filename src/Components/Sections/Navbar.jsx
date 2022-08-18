import { useState } from 'react'
import './Navbar.css'

function Navbar(props) {
    return (
        <div className="Navbar">

            <div className='Logo_space'>
                <img src='yelpLogo.png'  className='logo'/>
            </div>

            <div className='Search_bar'>
                <div className='Search_bar_food'></div>
                <div className='Search_bar_food_location'></div>
                <div className='Search_bar_search_button'></div>
            </div>
        </div>
      )
}


export default Navbar;