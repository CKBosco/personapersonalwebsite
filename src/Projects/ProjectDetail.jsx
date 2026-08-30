import { useState, useEffect } from "react";
import styles from './ProjectDetail.module.css';
export default function ProjectDetail({ selectedProject, setSelectedProject, projects }) {
    if (!selectedProject) return null;
    useEffect(() => {
        if (!selectedProject || !projects || projects.length === 0) return;

        const handleKeyDown = (event) => {
        const key = event.key.toLowerCase();
        const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);

        if (currentIndex === -1) return;

        if (key === 'escape') {
            setSelectedProject(null);
        } else if (key === 'e') {
            const nextIndex = (currentIndex + 1) % projects.length;
            setSelectedProject(projects[nextIndex]);
        } else if (key === 'q') {
            const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
            setSelectedProject(projects[prevIndex]);
        }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProject, setSelectedProject, projects]);
        return (
            <div className={styles.pdDim} onClick={() => setSelectedProject(null)} >
            <div className={styles.mainContainer} onClick={(e) => e.stopPropagation()}>
                <div className={styles.pdContainer}>
                    <div>
                        <div className={styles.projectId}>{selectedProject.id-1}</div>
                        <div className={styles.topContainer}>
                            <div className={styles.projectName}>{selectedProject.name}</div>
                            <div className={styles.toolDateContainer}>
                                <div className={styles.tools}>{selectedProject.tools}</div>
                                <div className={styles.date}>{selectedProject.date}</div>
                            </div>
                        </div>
                        <div className={styles.details}>{selectedProject.details}</div>
                        <div className={styles.bottomLine}></div>
                    </div>
                </div>
                <div className={styles.pdImageContainer}>
                    <img src={selectedProject.shadow} alt="" className={styles.shadowImg} />
                    <img src={selectedProject.portrait} alt={selectedProject.name} className={styles.portraitImg}/>
                </div>
            </div>
        </div>
    );
}