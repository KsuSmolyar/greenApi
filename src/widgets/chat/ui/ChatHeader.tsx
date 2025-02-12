import { useChatContext } from "../../../shared/contexts/chatContext";
import styles from "../Chat.module.css";
import { ChatHeaderMenu } from "./ChatHeaderMenu";

export const ChatHeader = () => {
	const { imgSrc, userName, openChatAside } = useChatContext();

	const headerHandleClick = () => {
		openChatAside();
	}

	return (
		<header className={styles.chatHeader} >
			<div className={styles.chatHeaderContact} onClick={headerHandleClick}>
				<div className={styles.imgContainer}>
					<img className={styles.img} src={imgSrc} alt={"аватарка"} />
				</div>
				<h4 className={styles.title}>{userName}</h4>
			</div>

			<ChatHeaderMenu />
		</header>
	)
}
