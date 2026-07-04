import { useNavigate } from "react-router";
import { useState } from "react";
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
    const uniDetails = {
        degree: "BSc Computer Science and Artificial Intelligence",
        date: "2024 - Present",
        details: "Key Modules:\nComing soon"
    }
    const colDetails = {
        degree: "A-Levels",
        date: "2022-2024",
        details: "Information Technology (A*)\nMathematics (A)\nChinese (A)\nEconomics (B)"
    }
    const [details, setDetails] = useState(uniDetails);
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
                    {/* onMouseEnter */}
                    <div className={styles.schoolContainer} onClick={() => setDetails(uniDetails)}>
                        <div className={styles.school}>Loughborough University</div>
                        <div className={styles.inProgress}>InProgress</div>
                    </div>
                    <div className={styles.schoolContainer} onClick={() => setDetails(colDetails)}>
                        <div className={styles.school}>Ratcliffe College</div>
                        <div className={styles.completed}>Done</div>
                    </div>
                </div>
                <div className={styles.detailContainer}>
                    <div className={styles.degreeDateContainer}>
                        <div className={styles.degree}>{details.degree}</div>
                        <div className={styles.date}>{details.date}</div>
                    </div>
                    <div className={styles.details}>{details.details}</div>
                </div>
            </div>
        </div>
    )
}