import { useState } from 'react'
import './Card.css'

function Card() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <div className='picture-cover'>
        <img src='grass.jpg' className='image'/>
      </div>

      <div className='profile-image'>
      </div>

      <div className='card-info'>
        <h1>Ziga Gobec</h1>
        <p>Sem profesionalni programer</p>
      </div>

      <div className='user-info'>

      </div>

      <div className='bottom-button'>

      </div>

    </div>
  )
}

export default Card
