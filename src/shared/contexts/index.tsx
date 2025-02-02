import { ActiveContactContextProvider } from "./activeContactContext"
import { ChatBlockContextProvider } from "./chatBlockContext"
import { MessagesContextProvider } from "./messagesContext"
import { NotificationContextProvider } from "./notificationContext"

export const GlobalContextProvider = ({ children }: { children: React.ReactElement }) => {
    return (
        <ActiveContactContextProvider>
            <ChatBlockContextProvider>
                <MessagesContextProvider>
                    <NotificationContextProvider>
                        { children }
                    </NotificationContextProvider>
                </MessagesContextProvider>
        </ChatBlockContextProvider>
    </ActiveContactContextProvider>
    )
}
