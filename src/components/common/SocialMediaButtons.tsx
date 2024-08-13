import React from "react";
import SocialMediaLink from "./SocialMediaLink";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

interface SocialMediaButtonsProps {
  className?: string;
}

const SocialMediaButtons: React.FC<SocialMediaButtonsProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex space-x-2 border border-about-bg rounded-full p-2 w-fit ${className}`}
    >
      <SocialMediaLink href="https://facebook.com" icon={FaFacebookF} />
      <SocialMediaLink href="https://twitter.com" icon={FaTwitter} />
      <SocialMediaLink href="https://linkedin.com" icon={FaLinkedinIn} />
    </div>
  );
};

export default SocialMediaButtons;
