import styles from "../Chat.module.css";
import { TextArea } from "../../../shared/ui/textArea"
import { Btn } from "../../../shared/ui/Btn";
import arrow from "../../../../public/arrow.svg";
import { FormEvent, useCallback, useState } from "react";
import { useActiveContactContext } from "../../../shared/contexts/activeContactContext";
import { setChatToLS } from "../../../shared/utils/setChatToLS";
import { useChatBlockContext } from "../../../shared/contexts/chatBlockContext";
import { useMessagesContext } from "../../../shared/contexts/messagesContext";
import { useAuthorizationContext } from "../../../shared/contexts/authorizationContext";

const TEXT_AREA_NAME = 'account-text'

export const ChatFooter = () => {
    const [isShowArrow, setIsShowArrow] = useState<boolean>(false);
    const { activeContact } = useActiveContactContext();
    const { addChat } = useChatBlockContext();
    const { addMessage } = useMessagesContext();
    const { apiService } = useAuthorizationContext();

    const handleTextareaChange = useCallback((value: string) => {
        setIsShowArrow(!!value.trim().length);
    }, [])
    
    const handleSubmit = (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        if (!activeContact) return
        const { id } = activeContact;
        const form = e.currentTarget;
        const textArea = form.elements.namedItem(TEXT_AREA_NAME) as HTMLTextAreaElement;
        if (apiService) {
            apiService.sendTextMessage({ chatId: id, message: textArea.value })
            .then((res) => {
                if (res) {
                    setChatToLS(activeContact);
                    addChat(activeContact);
                    addMessage({type: "outgoing", textMessage: textArea.value })
                    form.reset();
                }
            })
        } 
    }

    return (
        <footer className={styles.footer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <TextArea onChange={handleTextareaChange} placeholder={"Введите сообщение"} name={TEXT_AREA_NAME} />
                {isShowArrow && <Btn iconSrc={arrow} iconAlt={"стрелка"} type={"submit"} />}
            </form>
        </footer>
    )
}
