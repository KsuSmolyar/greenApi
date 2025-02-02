import styles from "../Chat.module.css";
import { useActiveContactContext } from "../../../shared/contexts/activeContactContext";
import { ChatHeader } from "./ChatHeader";
import { ChatFooter } from "./ChatFooter";
import { ChatContent } from "./ChatContent";


export const Chat = () => {
	const { activeContact } = useActiveContactContext();

	return (
		<div className={styles.chat}>
			{activeContact && <div className={styles.container}>
				<div className={styles.inner}>
					<ChatHeader />
					<ChatContent />
					<ChatFooter />
				</div>
			</div>}
		</div>
	)
}
