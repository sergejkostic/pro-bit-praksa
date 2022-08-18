import { useState } from 'react'
import './Dropdown.css'

function Dropdown(props) {
let link = []
    console.log(props.data)

    for (const data in props.data)  {
        link.push(<a href="#" key={data}>{props.data[data]}</a>)
    }

    return (
        <div class="dropdown">
            <button class="dropbtn">{props.text}</button>
            <div class="dropdown-content">
                {link}
            </div>
        </div>
    )
}

export default Dropdown;