import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  dateSent?: DateTimeNullableFilter;
  id?: StringFilter;
  userName?: StringNullableFilter;
  chat?: ChatWhereUniqueInput;
};
