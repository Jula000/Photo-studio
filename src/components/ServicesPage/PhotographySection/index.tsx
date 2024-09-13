import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";

interface PhotographySectionProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageUrls: string[];
  currentImageIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

const PhotographySection: React.FC<PhotographySectionProps> = ({
  title,
  description,
  linkText,
  linkUrl,
  imageUrls,
  currentImageIndex,
  onPrev,
  onNext,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 text-white">
      <div className="flex-1 md:mr-6">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-4">{description}</p>
        <Link
          href={linkUrl}
          className="mt-6 inline-block border-b border-about-bg pb-2"
        >
          {linkText} &rarr;
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-[300px] h-[300px] mt-6 md:mt-0 mb-2">
          <Image
            src={imageUrls[currentImageIndex]}
            alt={`${title} - ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex mt-6 space-x-2 justify-center">
          <Button onClick={onPrev} className="rounded-full w-10 h-10">
            &lt;
          </Button>
          <Button onClick={onNext} className="rounded-full w-10 h-10">
            &gt;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PhotographySection;
