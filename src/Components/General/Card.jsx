import { useState } from 'react'
import './Card.css'


function Card(props) {
    return (
    <div className='card-container'>
        <div className='card-header'>
        <i className="fa-solid fa-user"></i> {' '}
            {props.header}
            <br/>
            {props.date.toLocaleDateString()}
        </div>
        <div className='card-content'>
            <img  className={'card-image'} src={props.image}/>
        </div>
    </div>
    )
}

export default Card;