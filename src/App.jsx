import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Sections/Navbar'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='main_container'>
			<div className="header_container">
				<Navbar />
			</div>
		</div>
	)
}

export default App
