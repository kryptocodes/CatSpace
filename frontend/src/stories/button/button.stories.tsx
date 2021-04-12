import React from "react";
import { Story } from "@storybook/react";
import { Button, buttonProps } from '../../components/button/button'
import { toEnum } from "../utils/toEnum";
import { toBoolean } from "../utils/toBoolean";

export default {
  title: "Button",
  argTypes: { 
    onClick: { action: "clicked" } },
};

const TheButton: Story<buttonProps> = ({
  children,
  ...props
}) => {
  return (
    <Button size={"small"} {...props} >
      {children || `Button`}
    </Button>
  );
};

export const Default_Button = TheButton.bind({});

Default_Button.argTypes = {
  color: toEnum(["primary", "secondary"]),
  size: toEnum(["big", "small"]),
  border: toEnum(["small","medium","large"]),
  disabled: toBoolean(),
};