import { useNavigate } from "react-router";
import { useState } from "react";
import styles from './Projects.module.css';
import { useTransitionNavigate } from '../Transition/useTransitionNavigate';
import ProjVd from '../assets/skillsM.mp4';
import hoverSound from '../assets/MenuHover.wav';
import ProjectDetail from './ProjectDetail';
import { projects } from './ProjectList';

export default function Projects() {
    const navigate = useTransitionNavigate();
    const playHover = () => {
        const sound = new Audio(hoverSound);
        sound.volume = 0.2;
        sound.play().catch(() => {});
    };
    const [selectedProject, setSelectedProject] = useState(null);
    return (
            <div className={styles.mainContainer}>
                <video
                    className={styles.videoBg}
                    src= {ProjVd} 
                    autoPlay loop muted playsInline 
                />
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