import { createContext, useContext, useEffect, useState } from "react";
import ava from "../../../public/ava.svg";
import { useActiveContactContext } from "./activeContactContext";
import { useAuthorizationContext } from "./authorizationContext";

type ChatContextType = {
    imgSrc: string;
    userName: string;
    isChatAsideActive: boolean;
    openChatAside: () => void;
    closeChatAside: () => void;
    phone: string;
}

const ChatContext = createContext<ChatContextType>({
    imgSrc: "",
    userName: "",
    isChatAsideActive: false,
    openChatAside: () => { },
    closeChatAside: () => { },
    phone: ""
});

export const ChatContextProvider = ({ children }: { children: React.ReactElement }) => {
    const { activeContact } = useActiveContactContext();
    const { apiService } = useAuthorizationContext();

    const [imgSrc, setImgSrc] = useState(ava);
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("")
    const [isChatAsideActive, setIsChatAsideActive] = useState(false);

    const openChatAside = () => {
        setIsChatAsideActive(true)
    }

    const closeChatAside = () => {
        setIsChatAsideActive(false)
    }

    useEffect(() => {
        if (!activeContact) return
        const { id, name } = activeContact;
        apiService?.getContactAvatar(id)
            .then(res => {
                setImgSrc(res?.urlAvatar ? res.urlAvatar : ava)
            })
        setUserName(name ?? "")
        const phoneNumber = id.replace("@c.us", "");
        const currPhone = phoneNumber.slice(0, 1) + "-" + phoneNumber.slice(1, 4) + "-" + phoneNumber.slice(4, 7) + "-" + phoneNumber.slice(7, 9) + "-" + phoneNumber.slice(9)
        setPhone(currPhone)
    }, [activeContact, apiService])

    return (
        <ChatContext.Provider value={{ imgSrc, userName, isChatAsideActive, openChatAside, closeChatAside, phone }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChatContext = () => {
    const data = useContext(ChatContext);
    return data;
}
