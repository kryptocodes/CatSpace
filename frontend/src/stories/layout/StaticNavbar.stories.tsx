import React from "react";
import { Story } from "@storybook/react";
import { NavbarStatic,navbarStaticProps} from "../../components/navbar/navbarStatic";
import { toStr } from "../utils/toStr";

export default {
  title: "Layout",
};

const TheNavbar: Story<navbarStaticProps> = ({
  ...props
}) => {
  return (
   <NavbarStatic/>
  );
};

export const Default_Layout = TheNavbar.bind({});

Default_Layout.argTypes = {
  bgColor: toStr(),
  Link: toStr()
};