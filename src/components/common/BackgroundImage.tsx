import React from "react";

type BackgroundImageProps = {
  src: string;
  className?: string;
  height?: string;
  children?: React.ReactNode;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  className = "",
  height = "h-80",
  children,
}) => {
  return (
    <div
      className={`relative w-full ${height} rounded-3xl overflow-hidden bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url('${src}')` }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
