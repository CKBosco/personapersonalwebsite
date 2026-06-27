import { useNavigate } from "react-router";
import styles from './Skills.module.css'
import skillVd from '../assets/skills.mp4'
import hoverSound from '../assets/MenuHover.wav'
export default function Skills() {
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
                src= {skillVd} 
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