import React from "react";
import { Story } from "@storybook/react";
import { Button, buttonProps } from './button'
import { toEnum } from "../utils/toEnum";
import { toBoolean } from "../utils/toBoolean";

export default {
  title: "Button",
  argTypes: { onClick: { action: "clicked" } },
};

const TheButton: Story<buttonProps> = ({
  children,
  ...props
}) => {
  return (
    <Button {...props} >
      {children || `Button`}
    </Button>
  );
};

export const Main = TheButton.bind({});

Main.argTypes = {
  color: toEnum(["primary", "secondary"]),
  size: toEnum(["big", "small"]),
  disabled: toBoolean(),
  loading: toBoolean(),
  exampleIcon: toBoolean(),
};