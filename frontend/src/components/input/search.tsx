
import React from "react";
import SvgSearch  from '../../assets/icons/SearchIcon'
import { Input } from './input'

export interface SearchBarProps
  extends React.ComponentPropsWithoutRef<"input"> {
  inputClassName?: string;
  mobile?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  className = "",
  inputClassName = "",
  mobile = false,
  ...props
}) => {
  return (

<div className={`bg-gray-300 w-auto shadow rounded-lg p-2 flex ${mobile ? "px-4 w-full" : ""} ${className}`}>

{!mobile && (
<span className="w-auto flex justify-end items-center text-gray-500 p-2">
    <SvgSearch/>
</span>
)}
<input className="w-full bg-gray-300 rounded p-2" type="text" placeholder="Search"/>
</div>

  );
};