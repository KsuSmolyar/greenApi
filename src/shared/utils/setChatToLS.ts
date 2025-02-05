import { LOCAL_STORAGE_CHATS_KEY } from "../constants";
import { Chat } from "../contexts/chatBlockContext";

export const setChatToLS = (chat: Chat) => {
  const chats = localStorage.getItem(LOCAL_STORAGE_CHATS_KEY);
  const currentChats = [];
  if (chats) {
    currentChats.push(...JSON.parse(chats));
    const chatInLs = currentChats.find((currChat) => currChat.id === chat.id);
    if (!chatInLs) {
      currentChats.push(chat);
    } else {
      const indexOfChart = currentChats.indexOf(chatInLs);
      currentChats[indexOfChart] = chat;
    }
  } else {
    currentChats.push(chat);
  }

  localStorage.setItem(LOCAL_STORAGE_CHATS_KEY, JSON.stringify(currentChats));
};
