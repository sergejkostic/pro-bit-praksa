import { useState } from 'react'
import './Navbar.css'

function Navbar(props) {
    return (
        <div className="Navbar">

            <div className='Logo_space'>
                <img src='yelpLogo.png'  className='logo'/>
            </div>

            <div className='Search_bar_dropdown_menu_holder'> 
                <div className='Search_bar'>
                    <div className='Search_bar_food'>
                        <input placeholder='pizza, pub...'></input>
                    </div>
                    <div className='Search_bar_food_location'>
                        <input placeholder='Dublin...'></input>
                    </div>
                    <div className='Search_bar_search_button'>

                    </div>
                </div>


                <div className='Dropdown_menu_holder'>
                <div className='Dropdown_menu'>
                    <span className='Dropdown_menu_span'>Restaurants</span>
                </div>
                <div className='Dropdown_menu'>
                    <span className='Dropdown_menu_span'>Home services</span>
                </div>
                <div className='Dropdown_menu'>
                    <span className='Dropdown_menu_span'>Auto services</span>
                </div>
                <div className='Dropdown_menu'>
                    <span className='Dropdown_menu_span'>More</span>
                </div>
                </div>
            </div> 
        </div>
      )
}


export default Navbar;