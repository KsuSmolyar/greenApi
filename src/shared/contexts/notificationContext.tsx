import { createContext, useEffect, useRef, useState } from "react";
import { useActiveContactContext } from "./activeContactContext";
import { useChatBlockContext } from "./chatBlockContext";
import { useMessagesContext } from "./messagesContext";
import { useAuthorizationContext } from "./authorizationContext";
import { Notification } from "../api/types";
import { setChatToLS } from "../utils/setChatToLS";
import { getCurrentChats } from "../utils/getCurrentChats";
import { LOCAL_STORAGE_CHATS_KEY } from "../constants";

const NotificationContext = createContext(null);

export const NotificationContextProvider = ({ children }: { children: React.ReactElement }) => {
	const [notification, setNotification] = useState<Notification | null>(null)
	const { activeContact } = useActiveContactContext();
	const { chats, setChats } = useChatBlockContext();
	const { addMessage } = useMessagesContext();
	const { apiService } = useAuthorizationContext();
	const isFirstRenderRef = useRef(true)

	useEffect(() => {
		if (!notification) {
			return
		}

		if (notification.id === activeContact?.id) {
			addMessage({
				type: 'incoming',
				textMessage: notification.textMessage
			})
			setChatToLS({ id: notification.id, name: notification.name })
		} else {
			const chatData = {
				id: notification.id,
				name: notification.name,
				hasNewMessages: true,
			}
			const currentChats = getCurrentChats({ chatsArr: chats, chat: chatData })
			setChats(currentChats)
			localStorage.setItem(LOCAL_STORAGE_CHATS_KEY, JSON.stringify(currentChats))
		}
		setNotification(null);
	}, [notification, addMessage, activeContact, chats, setChats])

	useEffect(() => {
		if (!isFirstRenderRef.current) return
		if (apiService) {
			isFirstRenderRef.current = false
			apiService.getNotified(setNotification)
		}
	}, [apiService])

	return (
		<NotificationContext.Provider value={null}>
			{children}
		</NotificationContext.Provider>
	)
}
