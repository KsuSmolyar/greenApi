import { useState } from "react";
import { useOutsideClick } from "../../../shared/hooks/useOutsideClick";
import styles from "../Chat.module.css";
import classNames from "classnames";
import { Menu } from "../../../shared/ui/Icons";
import { useChatContext } from "../../../shared/contexts/chatContext";

export const ChatHeaderMenu = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const { openChatAside } = useChatContext();

    const menuRef = useOutsideClick<HTMLDivElement>(() => setIsMenuActive(false))

    const menuClickHandle = () => {
        setIsMenuActive((prev) => !prev)
    }

    const handleOpenChatAside = () => {
        openChatAside();
        setIsMenuActive(false);
    }

    return (
        <div ref={menuRef} className={styles.chatHeaderMenuBlock}>
            <button className={classNames(styles.chatHeaderMenuBtn, { [styles.isBtnActive]: isMenuActive })}
                onClick={menuClickHandle}>
                <Menu />
            </button>
            <div className={classNames(styles.chatHeaderMenu, { [styles.isMenuActive]: isMenuActive })}>
                <ul className={styles.chatHeaderMenuList}>
                    <li onClick={handleOpenChatAside}>Данные контакта</li>
                    <li>Закрыть чат</li>
                    <li>Очистить чат</li>
                    <li>Удалить чат</li>
                </ul>
            </div>
        </div>
    )
}
