import { useState } from 'react'
import { Routes, Route } from "react-router";
// import './App.css'
import MainMenu from './Menu/MainMenu.jsx'
import Config from './Config/Config.jsx'

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/config" element={<Config />} />
     </Routes>
    </>
  )
}

export default App