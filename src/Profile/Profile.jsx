import { useNavigate } from "react-router";
import styles from './Profile.module.css';
import { useTransitionNavigate } from '../Transition/useTransitionNavigate';
import proVd from '../assets/items.mp4';
import hoverSound from '../assets/MenuHover.wav';
export default function Profile() {
    const navigate = useTransitionNavigate();
    const playHover = () => {
        const sound = new Audio(hoverSound);
        sound.volume = 0.2;
        sound.play().catch(() => {});
    };
    return (
        <div className={styles.mainContainer}>
            <video
                className={styles.videoBg}
                src= {proVd} 
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