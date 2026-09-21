import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
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

function App() {
  const [soundOn, setSoundOn] = useState(true);
  const playHover = () => {
      if (!soundOn) return;
      const sound = new Audio(hoverSound);
      sound.volume = 0.2;
      sound.play().catch(() => {});
  };
  const [videoOn, setVideoOn] = useState(true);

  return (
    <>
    <VideoTransitionOverlay />
     <Routes>
        <Route path="/" element={<MainMenu playHover={playHover} videoOn={videoOn} />} />
        <Route path="/profile" element={<Profile playHover={playHover} videoOn={videoOn} />} />
        <Route path="/education" element={<Education playHover={playHover} videoOn={videoOn} />} />
        <Route path="/projects" element={<Projects playHover={playHover} videoOn={videoOn} />} />
        <Route path="/skills" element={<Skills playHover={playHover} videoOn={videoOn} />} />
        <Route path="/experience" element={<Experience playHover={playHover} videoOn={videoOn} />} />
        <Route path="/config" element={<Config soundOn={soundOn} setSoundOn={setSoundOn} playHover={playHover} videoOn={videoOn} setVideoOn={setVideoOn} />} />
     </Routes>
    </>
  )
}

export default App