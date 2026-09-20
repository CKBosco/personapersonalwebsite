import { useState, useEffect } from "react";
import styles from './ProjectDetail.module.css';
export default function ProjectDetail({ selectedProject, setSelectedProject, projects }) {
    
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        if (!selectedProject || !projects || projects.length === 0) return;

        const handleKeyDown = (event) => {
            const key = event.key.toLowerCase(); 

            const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
            if (currentIndex === -1) return;

            if (key === 'escape') {
                setSelectedProject(null);
            } else if (key === 'e') {
                const nextIndex = (currentIndex + 1) % projects.length;
                setDirection(1);
                setSelectedProject(projects[nextIndex]);
            } else if (key === 'q') {
                const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
                setDirection(-1);
                setSelectedProject(projects[prevIndex]);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProject, setSelectedProject, projects]);

    if (!selectedProject) return null;

    const slideClass = direction === 1
        ? styles.slideInRight
        : direction === -1
        ? styles.slideInLeft
        : '';

    const idSlideClass = direction === 1
    ? styles.idSlideInRight
    : direction === -1
    ? styles.idSlideInLeft
    : '';

        return (
            <div className={styles.pdDim} onClick={() => setSelectedProject(null)} >
            <div className={styles.pdButtonContainer}>
                <div className={styles.escContainer} onClick={() => setSelectedProject(null)}>
                    <div className={styles.escButton}>ESC</div>
                    <div className={styles.escText}>CLOSE</div>
                </div>
            </div>
            <div className={styles.mainContainer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.pdContainer}>
                <div className={`${styles.projectId} ${idSlideClass}`} onAnimationEnd={() => setDirection(0)}>
                    {selectedProject.id - 1}
                </div>
                <div className={`${styles.contentInner} ${slideClass}`}>
                    <div className={styles.topContainer}>
                        <div className={styles.projectName}>{selectedProject.name}</div>
                        <div className={styles.toolDateContainer}>
                            <div className={styles.tools}>{selectedProject.tools}</div>
                            <div className={styles.date}>{selectedProject.date}</div>
                        </div>
                    </div>
                    <div className={styles.details}>{selectedProject.details}</div>
                </div>
                    <div className={styles.bottomLine} />
                
            </div>
            <div className={styles.pdImageContainer}>
                <div key={selectedProject.id} className={`${styles.imageInner} ${slideClass}`}>
                    <img src={selectedProject.shadow} alt="" className={styles.shadowImg} />
                    <img src={selectedProject.portrait} alt={selectedProject.name} className={styles.portraitImg}/>
                </div>
            </div>
            </div>
        </div>
    );
}