import { useState } from 'react'
import './LogInButton.css'

function LIButton(props) {
    
    if (props.type === "posebni") {
        return (<button className='LIButton_posebni'>{props.text}</button>)
    } else {
        return (
            <button className='LIButton'>{props.text}</button>
        )
    }
}

export default LIButton;