import { useState } from 'react'
import './Button.css'


function Button(props) {
    return <button className={props.class_name || "Button"}>{props.text}</button>
}

export default Button;