import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MessageWhereInput = {
  chat?: ChatWhereUniqueInput;
  content?: StringNullableFilter;
  dateSent?: DateTimeNullableFilter;
  id?: StringFilter;
  userName?: StringNullableFilter;
};
