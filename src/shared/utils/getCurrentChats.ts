import { Chat } from "../contexts/chatBlockContext";

export const getCurrentChats = ({
  chatsArr,
  chat,
}: {
  chatsArr: Chat[];
  chat: Chat;
}) => {
  console.log("getCurrentChats вызов");
  const currChatsArr = [...chatsArr];

  for (let i = 0; i < currChatsArr.length; i++) {
    if (currChatsArr[i].id === chat.id) {
      if (chat.hasNewMessages) {
        if (currChatsArr[i].unreadMessagesCounter) {
          currChatsArr[i] = {
            ...chat,
            unreadMessagesCounter:
              (currChatsArr[i].unreadMessagesCounter || 0) + 1,
          };
        } else {
          currChatsArr[i] = { ...chat, unreadMessagesCounter: 1 };
        }
      } else {
        currChatsArr[i] = chat;
      }

      return currChatsArr;
    }
  }

  if (chat.hasNewMessages) {
    currChatsArr.push({ ...chat, unreadMessagesCounter: 1 });
  } else {
    currChatsArr.push(chat);
  }

  return currChatsArr;
};
