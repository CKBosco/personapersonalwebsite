import { useState } from 'react';
import { Routes, Route } from "react-router";
// import './App.css'
import MainMenu from './Menu/MainMenu.jsx';
import Profile from './Profile/Profile.jsx';
import Education from './Education/Education.jsx';
import Skills from './Skills/Skills.jsx';
import Projects from './Projects/Projects.jsx';
import Config from './Config/Config.jsx';

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/config" element={<Config />} />
     </Routes>
    </>
  )
}

export default App