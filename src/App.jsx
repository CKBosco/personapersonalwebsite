import { useState } from 'react';
import { Routes, Route } from "react-router";
// import './App.css'
import VideoTransitionOverlay from './Transition/VideoTransitionOverlay.jsx';
import MainMenu from './Menu/MainMenu.jsx';
import Profile from './Profile/Profile.jsx';
import Education from './Education/Education.jsx';
import Skills from './Skills/Skills.jsx';
import Projects from './Projects/Projects.jsx';
import Experience from './Experience/Experience.jsx';
import Config from './Config/Config.jsx';
import hoverSound from './assets/MenuHover.wav';
const playHover = () => {
    const sound = new Audio(hoverSound);
    sound.volume = 0.2;
    sound.play().catch(() => {});
};
function App() {

  return (
    <>
    <VideoTransitionOverlay />
     <Routes>
        <Route path="/" element={<MainMenu playHover={playHover} />} />
        <Route path="/profile" element={<Profile playHover={playHover} />} />
        <Route path="/education" element={<Education playHover={playHover} />} />
        <Route path="/projects" element={<Projects playHover={playHover} />} />
        <Route path="/skills" element={<Skills playHover={playHover} />} />
        <Route path="/experience" element={<Experience playHover={playHover} />} />
        <Route path="/config" element={<Config playHover={playHover} />} />
     </Routes>
    </>
  )
}

export default App