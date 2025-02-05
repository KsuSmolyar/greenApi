import { LockEl } from "../../../shared/ui/LockEl";
import styles from "../Chat.module.css";
import previewImg from "../../../../public/whatsappImg.png"

export const ChatPreview = () => {
    return (
        <div className={styles.chatPreview}>
            <img className={styles.chatPreviewImg} src={previewImg} alt={"whatsApp превью"} width={320} />
            <h1>WhatsApp для Windows</h1>
            <LockEl />
        </div>
    )
}
