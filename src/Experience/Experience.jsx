import {useState} from 'react';
import styles from './Experience.module.css';
import { useTransitionNavigate } from '../Transition/useTransitionNavigate';
import expVd from '../assets/itemsMV2.mp4';
import { exps } from './ExpList';
export default function Experience({ playHover, videoOn }) {
    const navigate = useTransitionNavigate();
    const [selectedExp, setSelectedExp] = useState(null);
    return (
        <div className={`${styles.mainContainer} ${!videoOn ? styles.solidBg : ''}`}>
            {videoOn && (
                <video
                    className={styles.videoBg}
                    src={expVd} 
                    autoPlay loop muted playsInline 
                />
            )}
            <div className={styles.back}
            onMouseEnter={playHover}
            onClick={() => navigate("/")}
            >
                <span className={styles.textElement}>BACK</span>
            </div>
            <div className={styles.expContainer}>
                {exps.map((exp) => (
                    <div key={exp.id} className={styles.expCard} onClick={() => setSelectedExp(exp)}>
                        <div className={styles.expImageContainer}>
                            <img src={exp.image} alt={exp.title} className={styles.expImage} />
                        </div>
                        <div className={styles.expTitleCompanyContainer}>
                            <div className={styles.expTitle}>{exp.title}</div>
                            <div className={styles.line} />
                            <div className={styles.expCompany}>{exp.company}</div>
                            <div className={styles.expTime}>{exp.time}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.expDetailContainer}>
                {selectedExp ? (
                    <div className={styles.expDetailWrapper}>
                        <div className={styles.detailHeader}>
                            <span className={styles.detailTitle}>{selectedExp.title}</span>
                            <span className={styles.detailCompany}>{selectedExp.company}</span>
                        </div>
                        <div className={styles.detailBadgeRow}>
                            <span className={styles.detailTimeBadge}>{selectedExp.time}</span>
                        </div>
                        <div className={styles.detailDivider} />
                        <div className={styles.expDetail}>
                            {selectedExp.description}
                        </div>
                    </div>
                ) : (
                    <div className={styles.placeholderState}>
                        SELECT AN EXPERIENCE TO VIEW DETAILS
                    </div>
                )}
            </div>
        </div>
    )
}