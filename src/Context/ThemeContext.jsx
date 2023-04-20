import React, { createContext, useState } from 'react'

export const themeContext = createContext()

function ThemeContext({ children }) {
  
  const [bulean, setBulean] = useState(false)
  
  const handleBuleanChange = () => setBulean(!bulean)

  const bgDarkStyle = { background: bulean ? "#292A2D" : null };
  const textDarkStyle = { color: bulean ? "white"  : null };


  return (
    <themeContext.Provider value={{ bulean, handleBuleanChange, textDarkStyle, bgDarkStyle }}>{children}</themeContext.Provider>
  )
}

export default ThemeContext