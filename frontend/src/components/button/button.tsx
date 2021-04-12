import React from 'react'

export type buttonProps = {
    size?: keyof typeof sizeClassnames;
    color?: keyof typeof colorClassnames;
    border?: keyof typeof borderSize;
    className?: String;
    children?: String;
}

const sizeClassnames = {
    big: "px-28 py-5 text-sm",
    small: "px-10 py-4 text-xs rounded-md",
};

const colorClassnames = {
    primary: "bg-kat-primary",
    secondary: "bg-kat-secondary"
  };

const borderSize = {
    small: "border",
    medium: "border-4",
    large: "border-8"
}


export const Button: React.FC<buttonProps> = ({children, color="primary", size ="big", border="medium", className="", ...props}) => {
        return (
            <button className={`${sizeClassnames[size]} ${colorClassnames[color]} active:${borderSize[border]} active:border-kat-primary active:bg-transparent active:text-kat-primary font-bold items-center text-white hover:bg-kat-secondary shadow-md justify-center ${className}`}
            {...props}
            >
                 <span >
                 {children}
              </span>
            </button>
        );
}


