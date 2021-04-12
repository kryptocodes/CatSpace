import React from "react";
import { Story } from "@storybook/react";
import { SearchBar, SearchBarProps } from '../../components/input/search'
import { toBoolean } from "../utils/toBoolean";
import { toStr } from "../utils/toStr"

export default {
  title: "Search"
};

const TheSearchBar: Story<SearchBarProps> = ({
  children,
  ...props
}) => {
  return (
    <SearchBar {...props} />
  );
};

export const Search_Bar = TheSearchBar.bind({});

Search_Bar.argTypes = {
  className: toStr(),
  mobile: toBoolean(),
};