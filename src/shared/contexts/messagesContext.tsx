import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useActiveContactContext } from "./activeContactContext";
import { useAuthorizationContext } from "./authorizationContext";
import { Message, MessageType } from "../api/types";

type MessagesContextType = {
    messages: Message[];
    addMessage: (params: AddMessageParams) => void;
}

type AddMessageParams = {
    type: MessageType,
    textMessage: string 
}

const MessagesContext = createContext<MessagesContextType>({messages: [], addMessage: () => {}});

export const MessagesContextProvider = ({ children }: { children: React.ReactElement }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const { activeContact } = useActiveContactContext();
    const {apiService} = useAuthorizationContext()

    const addMessage = useCallback(({type, textMessage }: AddMessageParams) => {
        setMessages((prev) => {
            return [...prev, { type, textMessage}]
        })
    }, [])

    useEffect(() => {
        if (activeContact && apiService) {     
            apiService.getChatHistory(activeContact.id)
                .then(res => {
                    setMessages(res.reverse())
                })
        }
    }, [activeContact, apiService])

    return (
        <MessagesContext.Provider value={{messages, addMessage}}>
            {children}
        </MessagesContext.Provider>
    )
}

export const useMessagesContext = () => {
     const data = useContext(MessagesContext);
    return data;
}
