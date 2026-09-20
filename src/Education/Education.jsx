import { useState } from "react";
import styles from './Education.module.css';
import { useTransitionNavigate } from '../Transition/useTransitionNavigate';
import eduVd from '../assets/questMV2.mp4';
export default function Education({ playHover, videoOn }) {
    const navigate = useTransitionNavigate();
    const uniDetails = {
        degree: "BSc Computer Science and Artificial Intelligence",
        date: "2024 - Present",
        details: "Key Modules:\nFormal Methods (92%)\nTeam Projects (90%)\nFormal Languages and Theory of Computation (89%)\nAI Methods (86%)\nOperating Systems, Networks and the Internet (86%)\nWeb Programming (83%)\nObject-Oriented Programming (82%)"
    }
    const colDetails = {
        degree: "A-Levels",
        date: "2022-2024",
        details: "Information Technology (A*)\nMathematics (A)\nChinese (A)\nEconomics (B)"
    }
    const [details, setDetails] = useState(uniDetails);
    return (
        <div className={`${styles.mainContainer} ${!videoOn ? styles.solidBg : ''}`}>
            {videoOn && (
                <video
                    className={styles.videoBg}
                    src={eduVd} 
                    autoPlay loop muted playsInline 
                />
            )}
            <div className={styles.back}
                onMouseEnter={playHover}
                onClick={() => navigate("/")}
            >
                <span className={styles.textElement}>BACK</span>
            </div>
            <div className={styles.educationContainer}>
                <div className={styles.schoolArea} >
                    <div className={styles.statusBar}>
                        <div className={styles.schoolStatus}>Name</div>
                        <div className={styles.status}>Status</div>
                    </div>
                    {/* onMouseEnter */}
                    <div className={styles.schoolContainer} onClick={() => setDetails(uniDetails)} onMouseEnter={playHover}>
                        <div className={styles.school}>Loughborough University</div>
                        <div className={styles.inProgress}>InProgress</div>
                    </div>
                    <div className={styles.schoolContainer} onClick={() => setDetails(colDetails)} onMouseEnter={playHover}>
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