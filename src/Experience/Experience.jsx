import {useState} from 'react';
import styles from './Experience.module.css';
import { useTransitionNavigate } from '../Transition/useTransitionNavigate';
import expVd from '../assets/itemsM.mp4';
import hoverSound from '../assets/MenuHover.wav';
import mitsuru from '../assets/expCharacters/mitsuru.png';
export default function Experience({ playHover }) {
    const navigate = useTransitionNavigate();
    // const playHover = () => {
    //     const sound = new Audio(hoverSound);
    //     sound.volume = 0.2;
    //     sound.play().catch(() => {});
    // };
    const [selectedExp, setSelectedExp] = useState(null);
    const exps = [
        {
            id: 1,
            title: "Experience 1",
            company: "Company 1",
            time: "Jan 2020 - Present",
            description: "Description for Experience 1",
            image: mitsuru
        }
    ]
    return (
        <div className={styles.mainContainer}>
            <video
                className={styles.videoBg}
                src= {expVd} 
                autoPlay loop muted playsInline 
            />
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