import { ChatList } from "../../../entities/chatList";
import { SearchBar } from "../../../features/searchBar";
import { useChatBlockContext } from "../../../shared/contexts/chatBlockContext";
import styles from "../ChatBlock.module.css";
import { ChatBlockHeader } from "./ChatBlockHeader";


export const ChatBlock = () => {
  const { chats, contacts, setSearch } = useChatBlockContext()
  
    return (
      <div className={styles.chatBlock}>
        <ChatBlockHeader />
        <SearchBar onSearch={setSearch} />
        <div className={styles.chatLists}>
          {/* Чаты */}
          <ChatList chatListData={chats} />
          {/* Контакты */}
          {!!chats.length && !!contacts.length && <h3>Контакты</h3>}
          <ChatList chatListData={contacts} />
        </div>
        
      </div>
    )
}
