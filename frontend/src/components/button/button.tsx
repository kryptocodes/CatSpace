import React from 'react'

export type buttonProps = {
    size?: keyof typeof sizeClassnames;
    color?: keyof typeof colorClassnames;
    ring?: keyof typeof ringSize;
    className?: String;
    children?: String;
    type?: 'submit' | 'reset' | 'button';
    disabled?: any;
}

const sizeClassnames = {
    big: "px-28 py-5 text-sm",
    small: "px-10 py-4 text-xs rounded-md",
};

const colorClassnames = {
    primary: "bg-kat-primary",
    secondary: "bg-kat-secondary"
  };

const ringSize = {
    small: "ring-0",
    medium: "ring-4",
    large: "ring-8"
}


export const Button: React.FC<buttonProps> = ({children, color="primary", size ="big", ring="medium", className="", ...props}) => {
        return (
            <button className={`${sizeClassnames[size]} ${colorClassnames[color]} active:${ringSize[ring]} active:ring-kat-primary active:bg-transparent active:text-kat-primary font-bold items-center text-white hover:bg-kat-secondary shadow-md justify-center ${className}`}
                type="button"
            {...props}
            >
                 <span >
                 {children}
              </span>
            </button>
        );
}


