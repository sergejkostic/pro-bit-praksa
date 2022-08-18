import { useState } from 'react'
import './Navbar.css'
import Button from '../General/Button.jsx'
import LIButton from '../General/LogInButton'
import Dropdown from '../General/Dropdown'

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
                    <Dropdown text="Restaurants" data={["Delivery", "Burgers", "Chinese", "Italian", "Reservation", "Japanese", "Mexican", "Thai"]}/>
                </div>
                <div className='Dropdown_menu'>
                    <Dropdown text="Home Services" data={["Congractors", "Electricians", "Home cleaners", "HVAC", "Landscaping", "Locksmiths", "Movers", "Plumbers"]}/>
                </div>
                <div className='Dropdown_menu'>
                    <Dropdown text="Auto Services" data={["Auto Repair", "Auto Detailing", "Body Shops", "Car Wash", "Car Dealers", "Oil Change", "Parking", "Towing"]}/>
                </div>
                <div className='Dropdown_menu' data={["Delivery", "Burgers", "Chinese", "Italian", "Reservation", "Japanese", "Mexican", "Thai"]}>
                    <Dropdown text="More"/>
                </div>
                </div>
            </div> 

            <div className='Button_holder'>
                <div><Button text="For Businesses" type="left"></Button></div>
                <div><Button text="Write A Review" type="left"></Button></div>
                <div><LIButton keyText="Log In"></LIButton></div>
                <div><LIButton keyText="Sign Up"></LIButton></div>
            </div>

        </div>
      )
}


export default Navbar;