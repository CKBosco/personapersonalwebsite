import styles from './Menu.module.css';
import { useTransitionNavigate } from '../Transition/useTransitionNavigate';
import menu from '../assets/Menu.mp4';
export default function MainMenu({ playHover, videoOn }) {
    const navigate = useTransitionNavigate();
    const options = [
        { name: "PROFILE", className: styles.profile },
        { name: "EDUCATION", className: styles.education },
        // { name: "EQUIP", className: styles.equip },
        { name: "SKILLS", className: styles.skills },
        { name: "PROJECTS", className: styles.projects},
        { name: "EXPERIENCE", className: styles.experience },
        { name: "CONFIG", className: styles.config},
    ];
    return (
        <div className={`${styles.mainContainer} ${!videoOn ? styles.solidBg : ''}`}>
            {videoOn && (
                <video
                    className={styles.videoBg}
                    src={menu} 
                    autoPlay loop muted playsInline 
                />
            )}
            <div className={styles.cornerTrapezoid}>
                <div className={styles.name}>Bosco Chan</div>
                <div className={styles.email}>chankinbok@gmail.com</div>
                <div className={styles.phone}>(+44) 7547667143    |   (+852) 55473050</div>
            </div>
            <div className={styles.optionsContainer}>
                {options.map((opt) => (
                    <div 
                        key={opt.name} 
                        className={`${styles.menuOption} ${opt.className}`}
                        onMouseEnter={playHover} 
                        onClick={() => navigate(`/${opt.name.toLowerCase()}`)}
                    >
                        <span className={styles.textElement}>{opt.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}