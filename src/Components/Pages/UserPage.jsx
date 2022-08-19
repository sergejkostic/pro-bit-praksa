import "./UserPage.css"
import { useState, useEffect } from 'react';
import { getUser } from "../../helper/api";

function UserPage(props) {
  
  const [user, setUser] = useState({});
  const getData = async () => {
      const data = await getUser();
      setUser(data);
      console.log(data);
  }
  
      useEffect(() => {
          getData();
      }, []);

  const showUserData = () => {
      navigate('/user');
  }
    return (
		<div className='main_container'>
            <h1>Podatki uporabnika</h1>
            <pre>
              {JSON.stringify(user)}
            </pre>
		</div>
    )
}


export default UserPage;