import styles from "../ChatCard.module.css"
import ava from "../../../../../public/ava.svg";
import { useActiveContactContext } from "../../../contexts/activeContactContext";
import { getUserName } from "../../../utils/getUserName";
import { ChatCardProps } from "../config/types";
import { useChatBlockContext } from "../../../contexts/chatBlockContext";
export const ChatCard = (
    { name, id, contactName, hasNewMessages }: ChatCardProps) => {
    const { setActiveContact } = useActiveContactContext();
    const currName = getUserName({ name, contactName, id })
    const { addChat } = useChatBlockContext();

    const handleClick = () => {
        setActiveContact({ id, name: currName ?? "" });
        if (hasNewMessages) {
            addChat({id, name})
        }
    }

    return (
        <li className={styles.card} id={id} onClick={handleClick}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={ava} alt={"аватарка"} />
            </div>
            <div className={styles.content}>
                <div className={styles.topContent}>
                    <h4 className={styles.title}>{currName ?? ""}</h4>
                </div>
               
               {hasNewMessages && <div className={styles.bottomContent}>
                    {/* <p className={styles.text}>text</p> */}
                    <span className={styles.unread}>✓</span>
                </div>}
            </div>
        </li>
    );
}
