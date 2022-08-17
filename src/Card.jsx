import { useState } from 'react'
import './Card.css'

function Card() {
  const [user, setUser] = useState( 
    {
    firstName: "Ziga",
    lastName: "Gobec",
    description: "Sem profesionalni programer",
    location: "Maribor",
    mail: "ziga.gobec@gmail.com",
    followers: "1337",
    following: "12345",
    background_picture: "grass.jpg",
    profile_picture: "profile_picture.jpg"
   }
  );

  const setRandomUser = () => {
    let newUser = Object.assign({}, user);
    newUser.firstName = "sergej"
    setUser(newUser)
  }

  return (
    <div className='card'>
      <div className='background_image_cover'>
        <img src={user.background_picture} className='background_image' />
      </div>

      <div className='profile-image-cover'>
        <img src={user.profile_picture} className='profile_picture' />
      </div>

      <div className='user_info'>
        <h1>{user.firstName} {user.lastName}</h1>
        <p>{user.description}</p>
      </div>

      <div className='location_mail_area'>
        <div className='location'>
        <i class="fa-solid fa-location-dot"></i>
          Maribor
        </div>
        <div className='followings-border'></div>
        <div className='mail'>
        <i class="fa-solid fa-envelope"></i>
          {user.mail}
        </div>
      </div>

      <div className='followings'>
        <div className='followers'>
          <p className='text'>Followers</p>
          <p className='text'>{user.followers}</p>
        </div>
        <div className='followings-border'></div>
        <div className='following'>
          <p className='text'>Following</p>
          <p className='text'>{user.following}</p>
        </div>
      </div>

      <div className='follow-button_area'>
        <button className='follow_button' onClick={setRandomUser}>Get New User</button>
      </div>
    </div>
  )
}

export default Card
