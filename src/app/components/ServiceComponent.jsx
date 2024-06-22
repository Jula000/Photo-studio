import Image from "next/image";
import { FaArrowRight, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import Button from "./common/Button";
import ServiceSection from "./common/ServiceSection";

const highlights = [
  "Coverage for weddings, parties, corporate functions, and more.",
  "Skilled photographers who know how to seize the moment.",
  "A mix of candid and posed shots for a comprehensive story.",
  "Quick turnaround for you to relive the day's highlights.",
];
const title = ["Events"];

const description = [
  "Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.",
];

export default function ServiceComponent() {
  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl">SERVICES</h1>
            <h1 className="text-4xl font-bold">MY PHOTOGRAPHY SERVICES</h1>
          </div>
          <Button>View All Services ➔</Button>
        </div>
        <div className="relative flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1 space-y-4">
            <ServiceSection
              title={title}
              description={description}
              highlights={highlights}
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
        </div>
        <div className="flex space-x-4 justify-end">
          <Button> {<FaArrowLeft />}</Button>
          <Button>{<FaArrowRight />}</Button>
        </div>
      </div>
    </div>
  );
}
