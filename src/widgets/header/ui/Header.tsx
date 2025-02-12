import styles from "../Header.module.css";
import { ChatImg } from "../../../shared/ui/Icons";
import { HeaderProps } from "../config/types";
import { useAuthorizationContext } from "../../../shared/contexts/authorizationContext";
import { useChatBlockContext } from "../../../shared/contexts/chatBlockContext";
import { HeaderBtn } from "./HeaderBtn";

export const Header = ({ setActiveBlock, activeBlock }: HeaderProps) => {
    const { accountData } = useAuthorizationContext()
    const { unreadMessagesCount } = useChatBlockContext();

    const handleProfileClick = () => {
        setActiveBlock("profileBlock")
    }

    const handleChatClick = () => {
        setActiveBlock("chatBlock")
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <HeaderBtn activeBlock={activeBlock} className={styles.headerBtnChat} activeBlockType={"chatBlock"} handleClick={handleChatClick}>
                    <>
                        <ChatImg />
                        {!!unreadMessagesCount && <span className={styles.headerTopMessagesCounter}>{unreadMessagesCount}</span>}
                    </>
                </HeaderBtn>
            </div>
            <div className={styles.headerBottom}>
                <HeaderBtn activeBlock={activeBlock} className={styles.headerProfileBtn} activeBlockType={"profileBlock"} handleClick={handleProfileClick}>
                    <img src={accountData.avatar} alt={"аватар"} />
                </HeaderBtn>
            </div>
        </header>
    )
}
