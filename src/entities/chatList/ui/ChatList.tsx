import { ChatCard } from "../../../shared/ui/chatCard";
import styles from "../ChatList.module.css";
import { IChatListProps } from "../config/types";

export const ChatList = ({ chatListData }: IChatListProps) => {
	if (!chatListData.length) {
		return null
	}

	return (
		<ul className={styles.chatList}>
			{chatListData.map((data, index) => {
				return (
					<ChatCard key={index} {...data} />
				)
			})}
		</ul>
	)
}
