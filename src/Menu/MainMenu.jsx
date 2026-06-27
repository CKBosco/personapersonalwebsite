import { useNavigate } from "react-router";
import styles from './Menu.module.css'
import menu from '../assets/Menu.mp4'
import hoverSound from '../assets/MenuHover.wav'
export default function MainMenu() {
    const navigate = useNavigate();
    const playHover = () => {
        const sound = new Audio(hoverSound);
        sound.volume = 0.2;
        sound.play();
    };
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
        <div className={styles.mainContainer}>
            <video
                className={styles.videoBg}
                src= {menu} 
                autoPlay loop muted playsInline />
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