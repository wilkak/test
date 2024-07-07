import { MessageCreateNestedManyWithoutChatsInput } from "./MessageCreateNestedManyWithoutChatsInput";

export type ChatCreateInput = {
  description?: string | null;
  messages?: MessageCreateNestedManyWithoutChatsInput;
  userId?: string | null;
};
