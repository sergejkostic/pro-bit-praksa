import { useState } from 'react'
import './LogInButton.css'

function LIButton(props) {
    return (
        <button className='LIButton'>{props.keyText}</button>
    )
}

export default LIButton;