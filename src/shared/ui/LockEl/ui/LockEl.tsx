import styles from "../LockEl.module.css"

export const LockEl = () => {
    return (
        <p className={styles.lockEl}>
            <img className={styles.lockElImg} src={"public/lock.svg"} alt={"замок"} />
            <span className={styles.lockElText}>Ваши личные сообщения защищены сквозным шифрованием</span>
        </p>
    )
}
