import React from 'react'
import styled from '@emotion/styled'

export type buttonProps = {
    size?: keyof typeof sizeClassnames;
    color?: keyof typeof colorClassnames;
    className?: String;
    children?: String;
}

const sizeClassnames = {
    big: "py-2 px-6 text-sm rounded-lg",
    small: "px-2 py-1 text-xs rounded-md",
};

const colorClassnames = {
    primaryColor: "background: #3797EF;",
    primary:
      "text-button bg-green-500 hover:bg-accent-hover disabled:text-accent-disabled disabled:bg-accent-hover",
    secondary:
      "text-button bg-primary-700 hover:bg-primary-600 disabled:text-primary-300",
    "secondary-800":
      "text-button bg-primary-800 hover:bg-primary-600 disabled:text-primary-300",
  };


export const Button: React.FC<buttonProps> = ({children, color = "primary", size ="big", className="", ...props}) => {
        return (
            <button style={{background:'#3797EF'}} className={`${sizeClassnames[size]} ${colorClassnames[color]} font-bold items-center justify-center ${className}`}
            {...props}
            >
                 <span >
                 {children}
              </span>
            </button>
        );
}


