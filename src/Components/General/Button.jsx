import { useState } from 'react'
import './Button.css'


function Button(props) {

    if (props.type === "posebni_trans") {
        return <button className="LIButton">{props.text}</button>
    } else if (props.type === "posebni_red") {
        return <button className="LIButton_posebni_red">{props.text}</button>
    } else {
        return <button className="Button">{props.text}</button>
    }
}

export default Button;