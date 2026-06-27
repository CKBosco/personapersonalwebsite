import { useNavigate } from "react-router";
import styles from './Projects.module.css'
import ProjVd from '../assets/skillsM.mp4'
import hoverSound from '../assets/MenuHover.wav'
export default function Projects() {
    const navigate = useNavigate();
    const playHover = () => {
        const sound = new Audio(hoverSound);
        sound.volume = 0.2;
        sound.play();
    };
    return (
        <div className={styles.mainContainer}>
            <video
                className={styles.videoBg}
                src= {ProjVd} 
                autoPlay loop muted playsInline 
            />
            <div className={styles.back}
            onMouseEnter={playHover}
            onClick={() => navigate("/")}
            >
                <span className={styles.textElement}>BACK</span>
            </div>
        </div>
    )
}