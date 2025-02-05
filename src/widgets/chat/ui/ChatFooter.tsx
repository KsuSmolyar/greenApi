import styles from "../Chat.module.css";
import { TextArea } from "../../../shared/ui/textArea"
import { Btn } from "../../../shared/ui/Btn";
import arrow from "../../../../public/arrow.svg";
import { useCallback, useRef, useState } from "react";
import { useActiveContactContext } from "../../../shared/contexts/activeContactContext";
import { setChatToLS } from "../../../shared/utils/setChatToLS";
import { useChatBlockContext } from "../../../shared/contexts/chatBlockContext";
import { useMessagesContext } from "../../../shared/contexts/messagesContext";
import { useAuthorizationContext } from "../../../shared/contexts/authorizationContext";

const TEXT_AREA_NAME = 'account-text'

export const ChatFooter = () => {
	const [isDisable, setIsDisable] = useState<boolean>(false);
	const { activeContact } = useActiveContactContext();
	const { addChat } = useChatBlockContext();
	const { addMessage } = useMessagesContext();
	const { apiService } = useAuthorizationContext();

	const formRef = useRef<HTMLFormElement>(null)

	const [textAreaValue, setTextAreaValue] = useState("")

	const handleTextareaChange = useCallback((value: string) => {
		setIsDisable(!!value.trim().length);
		setTextAreaValue(value.trim());
	}, [])

	const handleSubmit = () => {
		if (!activeContact) return
		const { id } = activeContact;
		if (textAreaValue.length && apiService) {
			apiService.sendTextMessage({ chatId: id, message: textAreaValue })
				.then((res) => {
					if (res) {
						setChatToLS(activeContact);
						addChat(activeContact);
						addMessage({ type: "outgoing", textMessage: textAreaValue })
						formRef.current?.reset();
					}
				})
		}

	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey) {
			e.preventDefault();
			handleSubmit()
		}
	}

	return (
		<footer className={styles.footer}>
			<form className={styles.form} ref={formRef}>
				<TextArea
					onKeyDown={handleKeyDown}
					onChange={handleTextareaChange}
					placeholder={"Введите сообщение"}
					name={TEXT_AREA_NAME}
				/>
				<Btn
					iconSrc={arrow}
					iconAlt={"стрелка"}
					type={"button"}
					disabled={!isDisable}
					onClick={handleSubmit}
				/>
			</form>
		</footer>
	)
}
