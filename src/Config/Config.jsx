import { useNavigate } from "react-router";
import {useState} from "react";
import styles from './Config.module.css';
import { useTransitionNavigate } from '../Transition/useTransitionNavigate';
import config from '../assets/Config.mp4';
import hoverSound from '../assets/MenuHover.wav';
export default function Config({ soundOn, setSoundOn, playHover }) {
    const navigate = useTransitionNavigate();
    const [videoOn, setVideoOn] = useState(true);
    // const playHover = () => {
    //     const sound = new Audio(hoverSound);
    //     sound.volume = 0.2;
    //     sound.play().catch(() => {});
    // };
    return (
        <div className={styles.mainContainer}>
            <video
                className={styles.videoBg}
                src= {config} 
                autoPlay loop muted playsInline 
            />
            
            <div className={styles.back}
            onMouseEnter={playHover}
            onClick={() => navigate("/")}
            >
                <span className={styles.textElement}>BACK</span>
            </div>

            
            <div className={styles.settingContainer}>
                <div className={styles.settingRow}>
                    <div className={styles.settingLabel}>SFX Audio</div>
                    <div className={styles.toggleContainer} onClick={() => setSoundOn(!soundOn)} onMouseEnter={playHover} >
                        <button className={`${styles.toggleBtn} ${soundOn ? styles.active : ''}`}>
                            ON
                        </button>
                        <button className={`${styles.toggleBtn} ${!soundOn ? styles.active : ''}`}>
                            OFF
                        </button>
                    </div>
                </div>
                <div className={styles.settingRow}>
                    <div className={styles.settingLabel}>Video Background</div>
                    <div className={styles.toggleContainer} onClick={() => setVideoOn(!videoOn)} onMouseEnter={playHover} >
                        <button className={`${styles.toggleBtn} ${videoOn ? styles.active : ''}`}>
                            ON
                        </button>
                        <button className={`${styles.toggleBtn} ${!videoOn ? styles.active : ''}`}>
                            OFF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}