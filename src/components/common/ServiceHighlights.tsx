import React from "react";
import Image from "next/image";
import GlossyButton from "@/components/common/GlossyButton";

interface ServiceHighlightsProps {
  title: string;
  description: string;
  highlights: string[];
}

const ServiceHighlights: React.FC<ServiceHighlightsProps> = ({
  title,
  description,
  highlights,
}) => {
  return (
    <div className="border border-about-bg p-6 rounded-lg space-y-4">
      <div className="flex items-center space-x-2">
        <h2 className="text-2xl font-semibold flex items-center space-x-2">
          <span className="uppercase">{title}</span>
          <GlossyButton className="px-6 py-3" />
        </h2>
      </div>
      <p>{description}</p>
      <div className="space-y-2">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Image src="/star.svg" height={30} width={30} alt="Star icon" />
            <p>{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceHighlights;
