import { useState } from "react";
import styles from './Projects.module.css';
import { useTransitionNavigate } from '../Transition/useTransitionNavigate';
import ProjVd from '../assets/skillsMV2.mp4';
import ProjectDetail from './ProjectDetail';
import { projects } from './ProjectList';

export default function Projects({ playHover, videoOn }) {
    const navigate = useTransitionNavigate();
    const [selectedProject, setSelectedProject] = useState(null);
    return (
            <div className={`${styles.mainContainer} ${!videoOn ? styles.solidBg : ''}`}>
                {videoOn && (
                    <video
                        className={styles.videoBg}
                        src={ProjVd} 
                        autoPlay loop muted playsInline 
                    />
                )}
                <div className={styles.back}
                onMouseEnter={playHover}
                onClick={() => navigate("/")}
                >
                    <span className={styles.textElement}>BACK</span>
                </div>

                <div className={styles.projectsContainer}>
                    {projects.map((pro) => (
                        <div key={pro.id} className={styles.projectCard} onClick={() => setSelectedProject(pro)}>
                            <img src={pro.image} alt={pro.name} className={styles.projectImage} />
                            <div className={styles.projectName}>{pro.name}</div>
                            <div className={styles.projectDate}>{pro.date}</div>
                        </div>
                    ))}
                </div>
                <ProjectDetail selectedProject={selectedProject} setSelectedProject={setSelectedProject} projects={projects} />
            </div>
            
    )
}