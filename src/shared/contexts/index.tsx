import { ActiveContactContextProvider } from "./activeContactContext"
import { ChatBlockContextProvider } from "./chatBlockContext"
import { ChatContextProvider } from "./chatContext"
import { MessagesContextProvider } from "./messagesContext"
import { NotificationContextProvider } from "./notificationContext"

export const GlobalContextProvider = ({ children }: { children: React.ReactElement }) => {
	return (
		<ActiveContactContextProvider>
			<ChatContextProvider>
			<ChatBlockContextProvider>
				<MessagesContextProvider>
					<NotificationContextProvider>
						{children}
					</NotificationContextProvider>
				</MessagesContextProvider>
				</ChatBlockContextProvider>
			</ChatContextProvider>
		</ActiveContactContextProvider>
	)
}
