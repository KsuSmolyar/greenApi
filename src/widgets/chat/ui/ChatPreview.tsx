import { LockEl } from "../../../shared/ui/LockEl";
import styles from "../Chat.module.css";

export const ChatPreview = () => {
    return (
        <div className={styles.chatPreview}>
            <img className={styles.chatPreviewImg} src={"public/whatsappImg.png"} alt={"whatsApp превью"} width={320} />
            <h1>WhatsApp для Windows</h1>
            <LockEl />
        </div>
    )
}
