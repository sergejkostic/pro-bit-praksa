import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Card from './Card'
import './index.css'
import Cards from './Cards'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cards count={2} />
  </React.StrictMode>
)
