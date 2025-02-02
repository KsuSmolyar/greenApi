import { Chat } from "../../../shared/contexts/chatBlockContext";

export interface IChatListProps {
  chatListData: (Chat & { contactName?: string })[];
}
