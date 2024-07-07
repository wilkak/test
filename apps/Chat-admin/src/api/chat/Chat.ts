import { Message } from "../message/Message";

export type Chat = {
  createdAt: Date;
  description: string | null;
  id: string;
  messages?: Array<Message>;
  updatedAt: Date;
  userId: string | null;
};
