import styles from "../ChatCard.module.css"
import ava from "../../../../../public/ava.svg";
import { useActiveContactContext } from "../../../contexts/activeContactContext";
import { getUserName } from "../../../utils/getUserName";
import { ChatCardProps } from "../config/types";
import { useChatBlockContext } from "../../../contexts/chatBlockContext";
import { setChatToLS } from "../../../utils/setChatToLS";
import { useMemo } from "react";
import classNames from "classnames";
export const ChatCard = (
	{ name, id, contactName, hasNewMessages, unreadMessagesCounter }: ChatCardProps) => {
	const { activeContact, setActiveContact } = useActiveContactContext();
	const currName = getUserName({ name, contactName, id })
	const { addChat } = useChatBlockContext();

	const isActive = useMemo(() => {
		return activeContact?.id === id
	}, [activeContact, id])

	const handleClick = () => {
		setActiveContact({ id, name: currName ?? "" });
		if (hasNewMessages) {
			addChat({ id, name })
			setChatToLS({ id, name })
		}
	}

	return (
		<li className={classNames(styles.chatCard, (isActive && styles.chatCardActive))} id={id} onClick={handleClick}>
			<div className={styles.imgContainer}>
				<img className={styles.img} src={ava} alt={"аватарка"} />
			</div>
			<div className={styles.content}>
				<div className={styles.topContent}>
					<h4 className={styles.title}>{currName ?? ""}</h4>
				</div>

				{hasNewMessages && <div className={styles.bottomContent}>
					{/* <p className={styles.text}>text</p> */}
					{!!unreadMessagesCounter && <span className={styles.unread}>{unreadMessagesCounter}</span>}
				</div>}
			</div>
		</li>
	);
}
