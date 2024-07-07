import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  dateSent?: Date | null;
  userName?: string | null;
  chat?: ChatWhereUniqueInput | null;
};
