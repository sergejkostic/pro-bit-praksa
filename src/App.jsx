import { useState } from 'react'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'

function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Navbar openAddTodoModal={() => setModalVisible(true)} />
      <div className='main-container'>
        <Homepage {...{isModalVisible, setModalVisible, todos, setTodos}}/>
      </div>
    </div>
  )
}

export default App