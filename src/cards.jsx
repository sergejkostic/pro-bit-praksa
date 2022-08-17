import { useState } from 'react'
import './Cards.css'
import Card from './Card';

const Cards = (props) => {
    let cards = []

    for (let i = 0; i < props.count; i++) {
        cards.push(<Card />)
    }

    return (
        <div className='cardHolder'>
            {cards}
        </div>
    )
}

export default Cards;