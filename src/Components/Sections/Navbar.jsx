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
                    <form>
                    <input className='Search_bar_input_left' placeholder='pizza, pub, Shanahanas'></input>
                        <input className='Search_bar_input_right' placeholder='Dublin'></input>
                        <button className='search_button'><i class="fa-solid fa-magnifying-glass search_icon"></i></button>
                    </form>
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
                <div className='Dropdown_menu' >
                    <Dropdown text="More" data={["Dry Cleaning", "Phone Repair", "Bars", "Nightlife", "Hair Salons", "Gyms", "Massage", "Thai"]}/>
                </div>
                </div>
            </div> 

            <div className='Button_holder'>
                <div><Button text="For Businesses" type="left"></Button></div>
                <div><Button text="Write A Review" type="left"></Button></div>
                <div><LIButton keyText="Log In"></LIButton></div>
                <div><LIButton keyText="Sign Up" type="posebni"></LIButton></div>
            </div>

        </div>
      )
}


export default Navbar;