import { useEffect, useRef } from "react";
import { useMessagesContext } from "../../../shared/contexts/messagesContext";
import { Message } from "../../../shared/ui/Message";
import styles from "../Chat.module.css";

export const ChatContent = () => {
	const { messages } = useMessagesContext();
	const contentRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const { current } = contentRef;
		if (current) {
			current.scrollTo({ top: current.scrollHeight })
		}
	}, [messages])

	return (
		<div className={styles.content} ref={contentRef}>
			<div className={styles.contentInner}>
				{messages.map((message, index) => {
					return (
						<Message type={message.type} key={index} text={message.textMessage} />
					)
				})}
			</div>
		</div>
	)
}
