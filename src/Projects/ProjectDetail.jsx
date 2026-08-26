import { useState } from "react";
import styles from './ProjectDetail.module.css';
export default function ProjectDetail({ selectedProject, setSelectedProject }) {
    if (!selectedProject) return null;
    return (
        <div className={styles.pdDim} onClick={() => setSelectedProject(null)}>
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