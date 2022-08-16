import { useState } from 'react'
import './Card.css'

function Card() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <div className='picture-cover'>
        <img src='grass.jpg' className='image'/>
      </div>

      <div className='card-info'>
        <h1>Ziga Gobec</h1>
        <p>Sem bivsi igralec CS:GO in se trenutno prijavljam na EPICENTER 21</p>
      </div>

      <div className='user-info'>

      </div>

      <div className='button'>

      </div>

    </div>
  )
}

export default Card
