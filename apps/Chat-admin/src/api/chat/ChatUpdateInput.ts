import { MessageUpdateManyWithoutChatsInput } from "./MessageUpdateManyWithoutChatsInput";

export type ChatUpdateInput = {
  description?: string | null;
  messages?: MessageUpdateManyWithoutChatsInput;
  userId?: string | null;
};
