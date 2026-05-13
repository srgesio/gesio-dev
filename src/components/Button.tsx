import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold text-[18px] transition-all active:scale-95 text-center whitespace-nowrap";
  
  const variants = {
    primary: "bg-accent-gray text-white hover:bg-[#3d3d3d]",
    secondary: "bg-light-gray text-accent-gray hover:bg-[#a5a5a5]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
