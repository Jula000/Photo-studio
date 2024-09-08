import React from "react";

const Marquee: React.FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative bg-zinc-500">
      <div className="flex animate-marquee space-x-4">
        <div className="flex space-x-4">
          <span className="mx-4 inline-block">EVENT PHOTOGRAPHY</span>
          <span className="mx-4 inline-block">COMMERCIAL PHOTOGRAPHY</span>
          <span className="mx-4 inline-block">PRODUCT PHOTOGRAPHY</span>
          <span className="mx-4 inline-block">WEDDING PHOTOGRAPHY</span>
          <span className="mx-4 inline-block">LANDSCAPE PHOTOGRAPHY</span>
          <span className="mx-4 inline-block">BRANDING PHOTOGRAPHY</span>
          <span className="mx-4 inline-block">PORTRAIT PHOTOGRAPHY</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
