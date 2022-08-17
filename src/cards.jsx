import { useState } from 'react'
import './Cards.css'
import Card from './Card';

function Cards() {
    return (
        <div className='cardHolder'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    )
}

export default Cards;