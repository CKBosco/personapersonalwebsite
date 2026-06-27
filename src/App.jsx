import { useState } from 'react'
import { Routes, Route } from "react-router";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import MainMenu from './Menu/MainMenu.jsx'

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<MainMenu />} />
     </Routes>
    </>
  )
}

export default App
