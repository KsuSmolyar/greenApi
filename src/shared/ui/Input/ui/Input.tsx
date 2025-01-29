import { inputProps } from "../config/types"
import styles from "../Input.module.css"

export const Input = ({placeholder}: inputProps) => {
    return (
        <input className={styles.input} placeholder={placeholder} />
    )
}
