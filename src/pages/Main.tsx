import classNames from "classnames";
import styles from "../../styles/Main.module.css";
import { ChatBlock } from "../widgets/chatBlock"
import { Chat } from "../widgets/chat";
import { GlobalContextProvider } from "../shared/contexts";
import { Header } from "../widgets/header";
import { useState } from "react";
import { ProfileBlock } from "../widgets/profileBlock";

export type ActiveBlock = "chatBlock" | "profileBlock";

export const Main = () => {
  const [activeBlock, setActiveBlock] = useState<ActiveBlock>("chatBlock");

  return (
    <GlobalContextProvider>
      <div className={styles.mainPage}>
        <div className={classNames(styles.container, "container")}>
          <Header setActiveBlock={setActiveBlock} activeBlock={activeBlock} />
          {activeBlock === "chatBlock" && <ChatBlock />}
          {activeBlock === "profileBlock" && <ProfileBlock />}
          <Chat />
        </div>
      </div>
    </GlobalContextProvider>
  )
}
