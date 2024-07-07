import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ChatTitle } from "../chat/ChatTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="chat.id" reference="Chat" label="chat">
          <SelectInput optionText={ChatTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="dateSent" source="dateSent" />
        <TextInput label="userName" source="userName" />
      </SimpleForm>
    </Edit>
  );
};
