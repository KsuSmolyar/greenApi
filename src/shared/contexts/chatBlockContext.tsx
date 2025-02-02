import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef } from "react";
import { ActiveContact } from "./activeContactContext";
import { getChatsFromLS } from "../utils/getChatsFromLS";
import { useAuthorizationContext } from "./authorizationContext";
import { Contact } from "../api/types";

type ChatBlockContextType = {
	chats: Chat[];
	contacts: Contact[];
	setSearch: (search: string) => void;
	addChat: (chat: Chat) => void;
}

export type Chat = ActiveContact & {
	hasNewMessages?: boolean
}

const ChatBlockContext = createContext<ChatBlockContextType>({ chats: [], contacts: [], setSearch: () => { }, addChat: () => { } });

type ChatBlockState = {
	contacts: Contact[];
	chats: Chat[]
	search: string
}

const initialState: ChatBlockState = {
	contacts: [],
	chats: [],
	search: ""
}

interface ChatsAction {
	type: "setChats",
	payload: ActiveContact[]
}

interface ContactsAction {
	type: "setContacts",
	payload: Contact[]
}

interface ChatAction {
	type: "addChat"
	payload: Chat
}

interface SearchAction {
	type: "search",
	payload: string
}

type ChatBlockAction = ChatsAction | ContactsAction | ChatAction | SearchAction;


const chatBlockReducer = (state: ChatBlockState, action: ChatBlockAction) => {
	switch (action.type) {
		case "setContacts": {
			return {
				...state,
				contacts: action.payload
			}
		}
		case "setChats": {
			return {
				...state,
				chats: action.payload
			}
		}
		case "addChat": {
			for (let i = 0; i < state.chats.length; i++) {
				if (state.chats[i].id === action.payload.id) {
					return {
						...state,
						chats: [...state.chats.slice(0, i), action.payload, ...state.chats.slice(i + 1)]
					}
				}
			}

			return {
				...state,
				chats: [...state.chats, action.payload]
			}
		}
		case "search": {
			return {
				...state,
				search: action.payload
			}
		}
	}
}


export const ChatBlockContextProvider = ({ children }: { children: React.ReactElement }) => {
	const [chatBlockState, dispatch] = useReducer(chatBlockReducer, initialState);
	const { apiService } = useAuthorizationContext();
	const isFirstRenderRef = useRef(true)

	const filteredContacts = useMemo(() => {
		if (!chatBlockState.search) return [];

		return chatBlockState.contacts.filter((contact) => {
			if (chatBlockState.chats.find((chat) => chat.id === contact.id)) return false
			return contact.id.includes(chatBlockState.search)
		})

	}, [chatBlockState])

	const setSearch = useCallback((search: string) => {
		dispatch({ type: "search", payload: search })
	}, [])

	const addChat = useCallback((chat: Chat) => {
		dispatch({ type: "addChat", payload: chat })
	}, [])


	useEffect(() => {
		if (!isFirstRenderRef.current) return
		if (apiService) {
			isFirstRenderRef.current = false
			apiService.getContacts().then((res) => {
				dispatch({ type: "setContacts", payload: res })
			})
		}
		dispatch({ type: "setChats", payload: getChatsFromLS() })
	}, [apiService])

	return (
		<ChatBlockContext.Provider value={{ chats: chatBlockState.chats, contacts: filteredContacts, setSearch, addChat }}>
			{children}
		</ChatBlockContext.Provider>
	);
}


export const useChatBlockContext = () => {
	const data = useContext(ChatBlockContext);
	return data;
}
