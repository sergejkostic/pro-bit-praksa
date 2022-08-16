import { useState } from 'react'
import './Card.css'

function Card() {
  const [count, setCount] = useState(0)

  return (
    <div className='card'>
      <div className='background_image_cover'>
        <img src='grass.jpg' className='background_image' />
      </div>

      <div className='profile-image-cover'>
        <img src='profile_picture.jpg' className='profile_picture'/>
      </div>

      <div className='user_info'>
        <h1>Ziga Gobec</h1>
        <p>Sem profesionalni programer</p>
      </div>

      <div className='followings'>
        <div className='followers'>
          <p className='text'>Followers</p>
          <p className='text'>150000</p>
        </div>
        <div className='following'>
          <p className='text'>Following</p>
          <p className='text'>150000</p>
        </div>
      </div>

      <div className='follow-button'>
        <p className='follow-text'>Follow</p>
      </div>
    </div>
  )
}

export default Card
