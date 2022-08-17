import { useState } from 'react'
import './Card.css'

function Card() {
  const [followers, setFollowers] = useState(1337);
  const [name, setName] = useState("");
  const nameChangeHandler = (e) => {
    setName(e.target.value)
 };


  return (
    <div className='card'>
      <div className='background_image_cover'>
        <img src='grass.jpg' className='background_image' />
      </div>

      <div className='profile-image-cover'>
        <img src='profile_picture.jpg' className='profile_picture' />
      </div>

      <div className='user_info'>
        <h1>{name}</h1>
        <p>Sem profesionalni programer</p>
      </div>

      <div className='location_mail_area'>
        <div className='location'>
        <i class="fa-solid fa-location-dot"></i>
          Maribor
        </div>
        <div className='followings-border'></div>
        <div className='mail'>
        <i class="fa-solid fa-envelope"></i>
          blablamail
        </div>
      </div>

      <div className='followings'>
        <div className='followers'>
          <p className='text'>Followers</p>
          <p className='text'>{followers}</p>
        </div>
        <div className='followings-border'></div>
        <div className='following'>
          <p className='text'>Following</p>
          <p className='text'>1234</p>
        </div>
      </div>

      <div className='follow-button_area'>
        <button className='follow_button' onClick={() => setFollowers((followers) => followers + 1)}>Follow</button>
      </div>
      <input type='text' required maxLength='20' onChange={nameChangeHandler}/>
    </div>
  )
}

export default Card
