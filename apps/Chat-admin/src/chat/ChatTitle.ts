import { Chat as TChat } from "../api/chat/Chat";

export const CHAT_TITLE_FIELD = "description";

export const ChatTitle = (record: TChat): string => {
  return record.description?.toString() || String(record.id);
};
