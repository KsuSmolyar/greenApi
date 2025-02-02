import { LOCAL_STORAGE_CHATS_KEY } from "../constants";

export const getChatsFromLS = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_CHATS_KEY);
  if (data) {
    return JSON.parse(data);
  }
  return [];
};
