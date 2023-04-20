import { useContext} from 'react'
import './index.css'
import NavBar from './Components/NavBar'
import Hero from './components/Hero'
import { themeContext } from './Context/ThemeContext'

function App() {
  const value = useContext(themeContext)


  return (
    <div className="App">
      <NavBar />
      <Hero />
    </div>
  )
}

export default App
