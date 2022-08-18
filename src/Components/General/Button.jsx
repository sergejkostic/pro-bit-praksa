import { useState } from 'react'
import './Button.css'


function Button(props) {

    return (
        <button className="Button">{props.text}</button>
    )
}

export default Button;