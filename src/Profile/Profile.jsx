import styles from './Profile.module.css';
import { useTransitionNavigate } from '../Transition/useTransitionNavigate';
import proVd from '../assets/itemsV2.mp4';
import {info} from './info.jsx'
export default function Profile({ playHover, videoOn }) {
    const navigate = useTransitionNavigate();
    return (
        <div className={`${styles.mainContainer} ${!videoOn ? styles.solidBg : ''}`}>
            {videoOn && (
                <video
                    className={styles.videoBg}
                    src={proVd} 
                    autoPlay loop muted playsInline 
                />
            )}
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