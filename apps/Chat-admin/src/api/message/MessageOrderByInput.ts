import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  chatId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  dateSent?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userName?: SortOrder;
};
