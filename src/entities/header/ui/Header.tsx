import styles from "../Header.module.css";
import chartImg from "../../../../public/chart.svg";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.topContent}>
                <button>
                    <img src={chartImg} alt={"иконка сообщения"} />
                </button>
            </div>
            <div className={styles.bottomContent}></div>
        </header>
    )
}
