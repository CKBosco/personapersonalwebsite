import { useNavigate } from "react-router";
import styles from './Education.module.css'
import eduVd from '../assets/questM.mp4'
import hoverSound from '../assets/MenuHover.wav'
export default function Education() {
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
                src= {eduVd} 
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