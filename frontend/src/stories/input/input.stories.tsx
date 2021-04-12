import React from "react";
import { Story } from "@storybook/react";
import { Input, InputProps } from '../../components/input/input'
import { toBoolean } from "../utils/toBoolean";
import { toStr } from "../utils/toStr"

export default {
  title: "Input"
};

const TheInput: Story<InputProps> = ({
  children,
  ...props
}) => {
  return (
    <Input {...props} />
  );
};

export const Input_Text = TheInput.bind({});

Input_Text.argTypes = {
  placeholder: toStr(),
  textarea: toBoolean(),
  error: toBoolean(),
  transparent: toBoolean(),
};