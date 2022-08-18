import { useState } from 'react'
import './Navbar.css'
import Button from '../General/Button.jsx'
import Dropdown from '../General/Dropdown'

function Navbar(props) {
    return (
        <div className="Navbar">
            <div className='Logo_space'>
                <img src='yelpLogo.png'  className='logo'/>
            </div>
            <div className='Search_bar_dropdown_menu_holder'> 
                <div className='Search_bar'>
                    {/* <form> */}
                        <input className='Search_bar_input_left' placeholder='pizza, pub, Shanahans'></input>
                        <div className='border_between_input'></div>
                        <input className='Search_bar_input_right' placeholder='Dublin'></input>
                        <button className='search_button'><i class="fa-solid fa-magnifying-glass search_icon"></i></button>
                    {/* </form> */}
                </div>


                <div className='Dropdown_menu_holder'>
                <div className='Dropdown_menu'>
                    <Dropdown text="Restaurants" data={["Delivery", "Burgers", "Chinese", "Italian", "Reservation", "Japanese", "Mexican", "Thai"]}/>
                </div>
                <div className='Dropdown_menu'>
                    <Dropdown text="Home Services" data={["Contractors", "Electricians", "Home Cleaners", "HVAC", "Landscaping", "Locksmiths", "Movers", "Plumbers"]}/>
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
                <div><Button text="For Businesses" ></Button></div>
                <div><Button text="Write A Review" ></Button></div>
                <div><Button text="Log In" type="posebni_trans" ></Button></div>
                <div><Button text="Sign Up" type="posebni_red" ></Button></div> 
            </div>

        </div>
      )
}


export default Navbar;