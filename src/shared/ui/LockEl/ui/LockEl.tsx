import styles from "../LockEl.module.css"
import lockImg from "../../../../../public/lock.svg"

export const LockEl = () => {
    return (
        <p className={styles.lockEl}>
            <img className={styles.lockElImg} src={lockImg} alt={"замок"} />
            <span className={styles.lockElText}>Ваши личные сообщения защищены сквозным шифрованием</span>
        </p>
    )
}
