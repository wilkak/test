import { Chat } from "../chat/Chat";

export type Message = {
  content: string | null;
  createdAt: Date;
  dateSent: Date | null;
  id: string;
  updatedAt: Date;
  userName: string | null;
  chat?: Chat | null;
};
