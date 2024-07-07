import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "userName";

export const MessageTitle = (record: TMessage): string => {
  return record.userName?.toString() || String(record.id);
};
