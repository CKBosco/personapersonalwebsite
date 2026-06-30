import { useNavigate } from "react-router";
import styles from './Profile.module.css';
import { useTransitionNavigate } from '../Transition/useTransitionNavigate';
import proVd from '../assets/itemsV2.mp4';
import hoverSound from '../assets/MenuHover.wav';
export default function Profile() {
    const navigate = useTransitionNavigate();
    const playHover = () => {
        const sound = new Audio(hoverSound);
        sound.volume = 0.2;
        sound.play().catch(() => {});
    };
    const info = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate"
    return (
        <div className={styles.mainContainer}>
            <video
                className={styles.videoBg}
                src= {proVd} 
                autoPlay loop muted playsInline 
            />
            <div className={styles.infoContainer}>
                <div className={styles.info}>{info}</div >
            </div>
            <div className={styles.back}
            onMouseEnter={playHover}
            onClick={() => navigate("/")}
            >
                <span className={styles.textElement}>BACK</span>
            </div>
        </div>
    )
}