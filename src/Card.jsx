import { useState } from 'react'
import './Card.css'
import axios from 'axios';

function Card(props) {
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


  const setRandomUser = async () => {

    let data = await axios.get('https://randomuser.me/api/')
    let jsonData = JSON.parse(data.request.response)
    console.log(jsonData["results"][0]);
    let results = jsonData["results"][0];

    setUser({
      firstName: results.name.first,
      lastName: results.name.last,
      description: results.gender,
      location: results.location.country + ", " + results.location.city,
      mail: results.email,
      followers: Math.floor(Math.random() * (100000 - 0 + 1)) + 0,
      following: Math.floor(Math.random() * (100000 - 0 + 1)) + 0,
      background_picture: "grass.jpg",
      profile_picture: results.picture.large
    })
  }

  return (
    <div className='card'>
      <div className='background_image_cover'>
        <img src={user.background_picture} className='background_image' />
      </div>

      <div className='profile-image-cover'>
        <img src={`${user.profile_picture}`} className='profile_picture' />
      </div>

      <div className='user_info'>
        <h1>{user.firstName} {user.lastName}</h1>
        <p>{user.description}</p>
      </div>

      <div className='location_mail_area'>
        <div className='location'>
        <i className="fa-solid fa-location-dot"></i>
          {user.location}
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
