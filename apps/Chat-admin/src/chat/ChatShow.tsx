import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CHAT_TITLE_FIELD } from "./ChatTitle";

export const ChatShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user ID" source="userId" />
        <ReferenceManyField
          reference="Message"
          target="chatId"
          label="Messages"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="chat" source="chat.id" reference="Chat">
              <TextField source={CHAT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateSent" source="dateSent" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="userName" source="userName" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
