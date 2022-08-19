import { useState } from 'react'
import './Dropdown.css'

function Dropdown(props) {
let link = []
    console.log(props.data)

    for (const data in props.data)  {
        link.push(<a href="#" key={data}>{props.data[data]}</a>)
    }

    return (
        <div className="dropdown">
            <button className="dropbtn">{props.text}</button>
            <div className="dropdown-content">
                {link}
            </div>
        </div>
    )
}

export default Dropdown;