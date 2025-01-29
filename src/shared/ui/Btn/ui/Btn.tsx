import styles from "../Btn.module.css";
import { BtnProps } from "../config/types";

export const Btn = ({children, iconSrc, iconAlt, onClick, ...props}: BtnProps) => {
    return (
        <button className={styles.btn} onClick={onClick} {...props}>
            {iconSrc && <img className={styles.img} src={iconSrc} alt={iconAlt} />}
            {children}
        </button>
    )
}
