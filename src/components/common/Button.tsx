import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
}) => (
  <button
    className={`bg-zinc-800 text-white px-4 py-2 rounded hover:bg-zinc-700 border-l border-t shadow-inner shadow-zinc-700 border-zinc-700 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
