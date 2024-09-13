"use client";
import React, { useState, useEffect } from "react";
import SessionPriceCard from "@/components/ServicesPage/SessionPriceCard";
import PhotographySection from "@/components/ServicesPage/PhotographySection";

interface PhotographySectionData {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageUrls: string[];
}

interface SessionPriceCardData {
  title: string;
  price: number;
  duration: number;
  imagesIncluded: number;
  additionalImagePrice: number;
  description: string;
}

const Prices: React.FC = () => {
  const [portraitPhotography, setPortraitPhotography] =
    useState<PhotographySectionData | null>(null);
  const [eventPhotography, setEventPhotography] =
    useState<PhotographySectionData | null>(null);
  const [commercialPhotography, setCommercialPhotography] =
    useState<PhotographySectionData | null>(null);
  const [priceCards, setPriceCards] = useState<SessionPriceCardData[]>([]);

  const [currentPortraitImageIndex, setCurrentPortraitImageIndex] = useState(0);
  const [currentEventImageIndex, setCurrentEventImageIndex] = useState(0);
  const [currentCommercialImageIndex, setCurrentCommercialImageIndex] =
    useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Correct API paths
        const photographyRes = await fetch("/api/photography-sections");
        if (!photographyRes.ok) {
          throw new Error("Failed to fetch photography sections");
        }
        const photographyData: PhotographySectionData[] =
          await photographyRes.json();

        setPortraitPhotography(photographyData[0]);
        setEventPhotography(photographyData[1]);
        setCommercialPhotography(photographyData[2]);

        const priceCardsRes = await fetch("/api/session-price-cards");
        if (!priceCardsRes.ok) {
          throw new Error("Failed to fetch session price cards");
        }
        const priceCardsData: SessionPriceCardData[] =
          await priceCardsRes.json();

        setPriceCards(priceCardsData);
      } catch (error) {
        console.error("Failed to load data", error);
      }
    };

    fetchData();
  }, []);

  const handlePrevPortraitImage = () => {
    if (!portraitPhotography) return;
    setCurrentPortraitImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : portraitPhotography.imageUrls.length - 1
    );
  };

  const handleNextPortraitImage = () => {
    if (!portraitPhotography) return;
    setCurrentPortraitImageIndex((prevIndex) =>
      prevIndex < portraitPhotography.imageUrls.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevEventImage = () => {
    if (!eventPhotography) return;
    setCurrentEventImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : eventPhotography.imageUrls.length - 1
    );
  };

  const handleNextEventImage = () => {
    if (!eventPhotography) return;
    setCurrentEventImageIndex((prevIndex) =>
      prevIndex < eventPhotography.imageUrls.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevCommercialImage = () => {
    if (!commercialPhotography) return;
    setCurrentCommercialImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : commercialPhotography.imageUrls.length - 1
    );
  };

  const handleNextCommercialImage = () => {
    if (!commercialPhotography) return;
    setCurrentCommercialImageIndex((prevIndex) =>
      prevIndex < commercialPhotography.imageUrls.length - 1 ? prevIndex + 1 : 0
    );
  };

  if (!portraitPhotography || !eventPhotography || !commercialPhotography) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <PhotographySection
          title={portraitPhotography.title}
          description={portraitPhotography.description}
          linkText={portraitPhotography.linkText}
          linkUrl={portraitPhotography.linkUrl}
          imageUrls={portraitPhotography.imageUrls}
          currentImageIndex={currentPortraitImageIndex}
          onPrev={handlePrevPortraitImage}
          onNext={handleNextPortraitImage}
        />
        <div>
          {priceCards.map((card, index) => (
            <SessionPriceCard
              key={index}
              title={card.title}
              price={card.price}
              duration={card.duration}
              imagesIncluded={card.imagesIncluded}
              additionalImagePrice={card.additionalImagePrice}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto p-4">
        <PhotographySection
          title={eventPhotography.title}
          description={eventPhotography.description}
          linkText={eventPhotography.linkText}
          linkUrl={eventPhotography.linkUrl}
          imageUrls={eventPhotography.imageUrls}
          currentImageIndex={currentEventImageIndex}
          onPrev={handlePrevEventImage}
          onNext={handleNextEventImage}
        />
        <div>
          {priceCards.map((card, index) => (
            <SessionPriceCard
              key={index}
              title={card.title}
              price={card.price}
              duration={card.duration}
              imagesIncluded={card.imagesIncluded}
              additionalImagePrice={card.additionalImagePrice}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto p-4">
        <PhotographySection
          title={commercialPhotography.title}
          description={commercialPhotography.description}
          linkText={commercialPhotography.linkText}
          linkUrl={commercialPhotography.linkUrl}
          imageUrls={commercialPhotography.imageUrls}
          currentImageIndex={currentCommercialImageIndex}
          onPrev={handlePrevCommercialImage}
          onNext={handleNextCommercialImage}
        />
        <div>
          {priceCards.map((card, index) => (
            <SessionPriceCard
              key={index}
              title={card.title}
              price={card.price}
              duration={card.duration}
              imagesIncluded={card.imagesIncluded}
              additionalImagePrice={card.additionalImagePrice}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Prices;
