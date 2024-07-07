import { Chat } from "../chat/Chat";

export type Message = {
  chat?: Chat | null;
  content: string | null;
  createdAt: Date;
  dateSent: Date | null;
  id: string;
  updatedAt: Date;
  userName: string | null;
};
