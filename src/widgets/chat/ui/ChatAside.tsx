import { useChatContext } from "../../../shared/contexts/chatContext";
import { Close } from "../../../shared/ui/Icons";
import styles from "../Chat.module.css";

export const ChatAside = () => {
    const { imgSrc, userName, phone, closeChatAside } = useChatContext();

    const handleContactInfoClose = () => {
        closeChatAside();
    }

    return (
        <div className={styles.chatContactInfo}>
            <header className={styles.chatContactInfoHeader}>
                <button onClick={handleContactInfoClose} className={styles.chatContactInfoCloseBtn}><Close /></button>
                <span>Данные контакта</span>
            </header>
            <div className={styles.chatContactInfoImg}>
                <img src={imgSrc} alt={"аватар контакта"} />
                <h3>{userName}</h3>
                <p>{phone}</p>
            </div>
        </div>
    )
}
