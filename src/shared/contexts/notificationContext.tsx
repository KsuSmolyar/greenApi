import { createContext, useEffect, useRef, useState } from "react";
import { useActiveContactContext } from "./activeContactContext";
import { useChatBlockContext } from "./chatBlockContext";
import { useMessagesContext } from "./messagesContext";
import { useAuthorizationContext } from "./authorizationContext";
import { Notification } from "../api/types";

const NotificationContext = createContext(null);

export const NotificationContextProvider = ({children}: {children: React.ReactElement}) => {
    const [notification, setNotification] = useState<Notification | null>(null)
    const { activeContact } = useActiveContactContext();
    const { addChat } = useChatBlockContext();
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
            } else {
                addChat({
                    id: notification.id,
                    name: notification.name,
                    hasNewMessages: true
                })
            }
            setNotification(null);
        }, [notification, addChat, addMessage, activeContact])
    
    useEffect(() => {
        if(!isFirstRenderRef.current) return
        if (apiService) {
            isFirstRenderRef.current = false
            apiService.getNotified(setNotification)
         }
    },[apiService])
    
    return (
        <NotificationContext.Provider value={null}>
            {children}
        </NotificationContext.Provider>
        )
}
