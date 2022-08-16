import { useState } from 'react'
import './Card.css'

function Card() {
  const [count, setCount] = useState(0)

  return (
    <div className="Card">
      <div className="Cover">
        <img src="grass.jpg"/>
      </div>
      <div>
        <p1>Ziga Jaka Gobec</p1>
      </div>
    </div>
  )
}

export default Card
