import { useNavigate } from "react-router";
import styles from './Education.module.css';
import { useTransitionNavigate } from '../Transition/useTransitionNavigate';
import eduVd from '../assets/questM.mp4';
import hoverSound from '../assets/MenuHover.wav';
export default function Education() {
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
                src= {eduVd} 
                autoPlay loop muted playsInline 
            />
            <div className={styles.back}
                onMouseEnter={playHover}
                onClick={() => navigate("/")}
            >
                <span className={styles.textElement}>BACK</span>
            </div>
            <div className={styles.educationContainer}>
                <div className={styles.schoolArea}>
                    <div className={styles.statusBar}>
                        <div className={styles.schoolStatus}>Name</div>
                        <div className={styles.status}>Status</div>
                    </div>
                    <div className={styles.schoolContainer}>
                        <div className={styles.school}>Loughborough University</div>
                        <div className={styles.progress}>In Progress</div>
                    </div>
                </div>
                <div className={styles.detailContainer}>
                    <div className={styles.degreeDateContainer}>
                        <div className={styles.degree}>BSc Computer Science and Artificial Intelligence</div>
                        <div className={styles.date}>2024 - Present</div>
                    </div>
                    <div className={styles.details}>Details</div>
                </div>
            </div>
        </div>
    )
}