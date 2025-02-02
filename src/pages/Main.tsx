import classNames from "classnames";
import styles from "../../styles/Main.module.css";
import { ChatBlock } from "../widgets/chatBlock"
import { Chat } from "../widgets/chat";
import { GlobalContextProvider } from "../shared/contexts";

export const Main = () => {
  return (
    <GlobalContextProvider>
      <div className={styles.mainPage}>
        <div className={classNames(styles.container, "container")}>
          <ChatBlock />
          <Chat />
        </div> 
      </div>
    </GlobalContextProvider>
  )
}
