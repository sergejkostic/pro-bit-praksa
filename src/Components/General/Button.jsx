import { useState } from 'react'
import './Button.css'


function Button(props) {
const classes = props.type

    return (
        <button className="Button">{props.text}</button>
    )
}

export default Button;