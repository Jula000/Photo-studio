import React from "react";
import Image from "next/image";

interface SessionPriceCardProps {
  title: string;
  price: number;
  duration: number;
  imagesIncluded: number;
  additionalImagePrice: number;
  description: string;
}

const SessionPriceCard: React.FC<SessionPriceCardProps> = ({
  title,
  price,
  duration,
  imagesIncluded,
  additionalImagePrice,
  description,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-white p-6 my-4 border-t border-about-bg">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-4xl font-bold">${price}</p>
        <button className="mt-2 text-sm white border-b border-about-bg pb-2">
          BOOK A CALL &rarr;
        </button>
      </div>
      <div className="flex flex-col space-y-2 text-sm">
        <div className="flex items-center space-x-4 border border-about-bg rounded-lg p-2">
          <Image src={"/star-price.svg"} alt="" width={40} height={40} />
          <p>{description}</p>
        </div>
        <div className="flex items-center space-x-4 border border-about-bg rounded-lg p-2">
          <Image src={"/star-price.svg"} alt="" width={40} height={40} />
          <p className="flex items-center">
            Includes a {duration} {duration > 1 ? "hours" : "hour"} photoshoot
            and {imagesIncluded} professionally edited images.
          </p>
        </div>
        <div className="flex items-center space-x-4 border border-about-bg rounded-lg p-2">
          <Image src={"/star-price.svg"} alt="" width={40} height={40} />
          <p className="flex items-center">
            Additional images can be purchased at ${additionalImagePrice} each.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SessionPriceCard;
