import React from "react";
import Image from "next/image";

interface GlossyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const GlossyButton: React.FC<GlossyButtonProps> = ({
  className,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={`bg-button-blue rounded-full ml-3 flex items-center justify-center shadow-inner shadow-indigo-400 ${className}`}
      onClick={onClick}
      {...rest}
    >
      <Image
        src="/hero-btn.svg"
        alt="Icon"
        width={20}
        height={20}
        layout="fixed"
      />
    </button>
  );
};

export default GlossyButton;
