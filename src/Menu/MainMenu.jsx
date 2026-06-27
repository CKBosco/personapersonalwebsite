import styles from './Menu.module.css'
export default function MainMenu() {
    const options = [
        { name: "SKILL", className: styles.skill },
        { name: "ITEM", className: styles.item },
        { name: "EQUIP", className: styles.equip },
        { name: "PERSONA", className: styles.persona },
        { name: "STATS", className: styles.stats },
        { name: "QUEST", className: styles.quest },
        { name: "CONFIG", className: styles.config }
    ];
    return (
        <div className={styles.mainContainer}>
            <div className={styles.optionsContainer}>
                {options.map((opt) => (
                    <div 
                        key={opt.name} 
                        className={`${styles.menuOption} ${opt.className}`}
                    >
                        <span className={styles.textElement}>{opt.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}