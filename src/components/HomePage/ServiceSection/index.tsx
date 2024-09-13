"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../../common/Button";
import ServiceHighlights from "../../common/ServiceHighlights";

interface PhotoServiceHome {
  photo: string;
}

const ServiceSection = () => {
  const [photos, setPhotos] = useState<PhotoServiceHome[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("/api/photoServiceHome");
        const data = await response.json();
        setPhotos(data.photos as PhotoServiceHome[]); // Use type assertion here
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch photos", error);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
  };

  if (loading) {
    return <div>Loading...</div>; // Or any loading spinner you prefer
  }

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
              <Button onClick={prevImage} className="p-2 rounded-full">
                {"<"}
              </Button>
              <Button onClick={nextImage} className="p-2 rounded-full">
                {">"}
              </Button>
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
          <div className="relative w-full md:w-1/2 h-[450px]">
            <Image
              src={photos[currentIndex]?.photo || "/default-image.jpg"}
              alt="Event Photography"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex sm:hidden justify-center md:justify-end mt-4">
          <div className="p-2 border-about-bg border rounded-full">
            <Button onClick={prevImage} className="p-2 rounded-full mr-4">
              {"<"}
            </Button>
            <Button onClick={nextImage} className="p-2 rounded-full">
              {">"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
