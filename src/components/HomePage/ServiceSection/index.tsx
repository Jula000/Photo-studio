import React from "react";
import Image from "next/image";
import Button from "../../common/Button";
import ServiceHighlights from "../../common/ServiceHighlights";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <div className="text-white flex items-center justify-center">
      <div className="mx-auto p-6 space-y-6 container">
        <div className="flex flex-col sm:flex-row justify-between border-b border-about-bg pb-6">
          <div>
            <h1 className="uppercase text-base text-zinc-400">Services</h1>
            <h1 className="text-4xl font-bold">MY PHOTOGRAPHY SERVICES</h1>
          </div>
          <div className="flex items-center">
            <div className="border border-about-bg rounded-full space-x-4 p-2 hidden lg:flex mr-4">
              <Button className="p-2 rounded-full">{"<"}</Button>
              <Button className="p-2 rounded-full">{">"}</Button>
            </div>
            <Button className="w-full sm:w-auto px-4 py-2 text-center">
              View All Services →
            </Button>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1 space-y-4">
            <ServiceHighlights
              title="Events"
              description="Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day."
              highlights={[
                "Coverage for weddings, parties, corporate functions, and more.",
                "Skilled photographers who know how to seize the moment.",
                "A mix of candid and posed shots for a comprehensive story.",
                "Quick turnaround for you to relive the day's highlights.",
              ]}
            />
          </div>
          <div className="relative w-full md:w-1/2 h-80">
            <Image
              src="/kytsya.jpg"
              alt="Event Photography"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex sm:hidden justify-center md:justify-end mt-4">
            <div className="p-2 border-about-bg border rounded-full">
              <Button className="p-2 rounded-full mr-4">{"<"}</Button>
              <Button className="p-2 rounded-full">{">"}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
