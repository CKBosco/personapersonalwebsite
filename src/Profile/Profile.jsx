import { useNavigate } from "react-router";
import styles from './Profile.module.css';
import { useTransitionNavigate } from '../Transition/useTransitionNavigate';
import proVd from '../assets/itemsV2.mp4';
import hoverSound from '../assets/MenuHover.wav';
export default function Profile({ playHover }) {
    const navigate = useTransitionNavigate();
    // const playHover = () => {
    //     const sound = new Audio(hoverSound);
    //     sound.volume = 0.2;
    //     sound.play().catch(() => {});
    // };
    const info = "I'm a third-yearComputer Science and Artificial Intelligence student at Loughborough University with over 80% average on first and second years. Over the past two years I've built a strong foundation in full-stack development, database systems, and software engineering through a range of independent projects. I'm proficient in Python, Java, JavaScript, HTML/CSS, PHP, and SQL, with growing experience in React and Laravel for collaborative, team-based development. Outside of coursework, I enjoy exploring AI-assisted development practices and applying technical skills to real-world problems. When I'm not coding, you'll find me experimenting with video editing and photography, playing piano, or shooting pool."
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
            <div className={styles.infoContainer}>
                <div className={styles.info}>{info}</div >
            </div>
        </div>
    )
}