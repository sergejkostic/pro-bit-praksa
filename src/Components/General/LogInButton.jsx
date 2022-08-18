import { useState } from 'react'
import './LogInButton.css'

function LIButton(props) {
    
    if (props.type === "posebni") {
        return (<button className='LIButton_posebni'>{props.keyText}</button>)
    } else {
        return (
            <button className='LIButton'>{props.keyText}</button>
        )
    }
}

export default LIButton;