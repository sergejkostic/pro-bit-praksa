import { useState } from 'react'
import './Card.css'

function Card() {
  const [count, setCount] = useState(0)

  return (
    <div className='card'>
      <div className='picture-cover'>
        <img src='grass.jpg' className='image' />
      </div>

      <div className='profile-image-cover'>
      </div>

      <div className='card-info'>
        <h1>Ziga Gobec</h1>
        <p>Sem profesionalni programer</p>
      </div>

      <div className='followings'>
        <div className='followers-info'>
          <p className='text'>Followers</p>
          <p className='text'>150000</p>
        </div>
        <div className='followers-info-2'>
          <p className='text'>Following</p>
          <p className='text'>150000</p>
        </div>
      </div>

      <div className='bottom-button'>
        <p className='follow-text'>Follow</p>
      </div>
    </div>
  )
}

export default Card
