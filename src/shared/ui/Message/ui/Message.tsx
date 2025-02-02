import classNames from "classnames";
import styles from "../Message.module.css";
import { MessageProps } from "../config/types";

export const Message = ({type, text}: MessageProps) => {
    const classes = classNames(styles.message, {
        [styles.primary]: type === "outgoing",
        [styles.secondary]: type === "incoming"
    })
    return (
        <div className={classes}>
            <p>{text}</p>
        </div>
    )
}
