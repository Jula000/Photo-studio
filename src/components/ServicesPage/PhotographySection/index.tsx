import React from "react";
import Link from "next/link";
import Button from "@/components/common/Button";
import Image from "next/image";

interface PhotographySectionProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageUrl: string;
  onPrev?: () => void;
  onNext?: () => void;
}

const PhotographySection: React.FC<PhotographySectionProps> = ({
  title,
  description,
  linkText,
  linkUrl,
  imageUrl,
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
      <div className="flex-col">
        <div className="flex-1 mt-6 md:mt-0 mb-2">
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={360}
            className="bg-cover"
          />
        </div>
        <div className="flex mt-6 md:mt-0 space-x-2 justify-center">
          {onPrev && (
            <Button onClick={onPrev} className="rounded-full w-10 h-10">
              <Image
                src={"<.svg"}
                alt=""
                width={9}
                height={9}
                className="self-center"
              />
            </Button>
          )}
          {onNext && (
            <Button onClick={onNext} className="rounded-full w-10 h-10">
              <Image
                src={">.svg"}
                alt=""
                width={9}
                height={9}
                className="self-center"
              />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotographySection;
