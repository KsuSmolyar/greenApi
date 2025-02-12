import styles from "../Chat.module.css";
import { useActiveContactContext } from "../../../shared/contexts/activeContactContext";
import { ChatHeader } from "./ChatHeader";
import { ChatFooter } from "./ChatFooter";
import { ChatContent } from "./ChatContent";
import { ChatPreview } from "./ChatPreview";
import { useChatContext } from "../../../shared/contexts/chatContext";
import { ChatAside } from "./ChatAside";

export const Chat = () => {
	const { activeContact } = useActiveContactContext();
	const { isChatAsideActive } = useChatContext();

	return (
		<div className={styles.chat}>
			{activeContact ?
				<div className={styles.container}>
					<div className={styles.inner}>
						<ChatHeader />
						<ChatContent />
						<ChatFooter />
					</div>
				</div> :
				<ChatPreview />
			}
			{isChatAsideActive && <ChatAside />}
		</div>
	)
}
