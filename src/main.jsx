import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeContext from './Context/ThemeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContext>
    <App />
  </ThemeContext>
)