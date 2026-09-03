import { useNavigate } from "react-router";
import styles from './Skills.module.css';
import { useTransitionNavigate } from '../Transition/useTransitionNavigate';
import skillVd from '../assets/skills.mp4';
import hoverSound from '../assets/MenuHover.wav';
export default function Skills({ playHover }) {
    const navigate = useTransitionNavigate();
    // const playHover = () => {
    //     const sound = new Audio(hoverSound);
    //     sound.volume = 0.2;
    //     sound.play().catch(() => {});
    // };
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
            <div className={styles.tsContainer}>
                <div className={styles.tsTitle}>Technical Skills</div>
                <div className={styles.plTitle}>Programming Languages</div>
                <div className={styles.langList}>{`HTML, JavaScript, CSS, PHP, Java, C++\nPython, SQL, Haskell, Kotlin`}</div>
                <div className={styles.fTitle}>Frameworks & Tools</div>
                <div className={styles.fList}>{`Git, React, Laravel, VSCode, Jupyter Notebook\nEclipse IDE, Arduino, Android Studio`}</div>
            </div>
            <div className={styles.osContainer}>
                <div className={styles.osTitle}>Other Skills</div>
                <div className={styles.osList}>{`Problem Solving\nCritical Thinking\nCommunication\nTeamwork\nAdaptability\nTime Management\nResponsible\nVideo editing\nGraphic design\nCustomer service experience\nEvent Organisation`}</div>
            </div>
        </div>
    )
}