import { useState } from 'react'
import './Card.css'


function Card(props) {
    return (
    <div className='card-container' onClick={props.onClickFunction}>
        <div className='card-header'>
        <i className="fa-solid fa-user"></i> {' '}
            {props.header}
            <br/>
            <span>{props.date.toLocaleDateString()}</span>
        </div>
        <div className='card-content'>
            <img  className={'card-image'} src={props.image}/>
        </div>
    </div>
    )
}

export default Card;