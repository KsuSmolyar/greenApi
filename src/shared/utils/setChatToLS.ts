import { LOCAL_STORAGE_CHATS_KEY } from "../constants";
import { ActiveContact } from "../contexts/activeContactContext";

export const setChatToLS = (activeContact: ActiveContact) => {
  const chats = localStorage.getItem(LOCAL_STORAGE_CHATS_KEY);
  const currentChats = [];
  if (chats) {
    currentChats.push(...JSON.parse(chats));
    if (!currentChats.find((item) => item.id === activeContact.id)) {
      currentChats.push(activeContact);
    }
  } else {
    currentChats.push(activeContact);
  }

  localStorage.setItem(LOCAL_STORAGE_CHATS_KEY, JSON.stringify(currentChats));
};
