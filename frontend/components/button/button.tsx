import React from 'react'
import styled from '@emotion/styled'

export type buttonProps = {
    size?: keyof typeof sizeClassnames;
    color?: keyof typeof colorClassnames;
    className?: String;
    children?: String;
}

const sizeClassnames = {
    big: "px-28 py-5 text-sm hover:bg-katbtn-secondary",
    small: "px-5 py-10 text-xs hover:bg-katbtn-secondary",
};

const colorClassnames = {
    primaryColor: "bg-katbtn-primary ",
    secondaryColor: "bg-katbtn-secondary"
  };


export const Button: React.FC<buttonProps> = ({children, color="primaryColor", size ="big", className="", ...props}) => {
        return (
            <button className={`${sizeClassnames[size]} ${colorClassnames[color]}  font-bold items-center text-white justify-center ${className}`}
            {...props}
            >
                 <span >
                 {children}
              </span>
            </button>
        );
}


