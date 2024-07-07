import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type MessageCreateInput = {
  chat?: ChatWhereUniqueInput | null;
  content?: string | null;
  dateSent?: Date | null;
  userName?: string | null;
};
