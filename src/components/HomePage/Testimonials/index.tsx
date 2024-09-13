"use client";
import React, { useState, useEffect } from "react";
import Button from "../../common/Button";
import SocialMediaButtons from "../../common/SocialMediaButtons";
import Ratings from "./Ratings";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch("/api/testimonials");
      const data = await response.json();
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 3 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + visibleCount;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - visibleCount;
      return nextIndex < 0 ? testimonials.length - visibleCount : nextIndex;
    });
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  const paddedTestimonials =
    visibleTestimonials.length < visibleCount
      ? [
          ...visibleTestimonials,
          ...testimonials.slice(0, visibleCount - visibleTestimonials.length),
        ]
      : visibleTestimonials;

  const singleTestimonial = testimonials[currentIndex];

  return (
    <div className="text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-sm font-semibold uppercase text-zinc-400">
          Testimonials
        </h2>
        <h1 className="text-4xl font-bold mb-6">What My Clients Say</h1>
        <p className="mb-2 text-zinc-400">Total Reviews</p>
        <div className="border-b border-about-bg pb-10 flex flex-row">
          <p className="text-2xl font-bold mr-3 self-center">323</p>
          <div className="flex items-center">
            <div className="border border-about-bg rounded-full space-x-4 p-2 hidden lg:flex mr-2">
              <Button onClick={prevTestimonial} className="p-2 rounded-full">
                {"<"}
              </Button>
              <Button onClick={nextTestimonial} className="p-2 rounded-full">
                {">"}
              </Button>
            </div>
          </div>
        </div>

        <div className="block lg:hidden mt-12">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold">
                  {singleTestimonial?.name}
                </h3>
                <p className="text-sm text-zinc-400">
                  {singleTestimonial?.location}
                </p>
              </div>
              <div className="flex space-x-2">
                <SocialMediaButtons className="inline-flex rounded-3xl border border-about-bg p-1 bg-main-color" />
              </div>
            </div>
            <div className="flex items-center mb-4">
              <Ratings rating={singleTestimonial?.rating} />
            </div>
            <p>{singleTestimonial?.text}</p>
          </div>
        </div>

        {/* Large screen: show 3 testimonials */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mt-12">
          {paddedTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-zinc-800 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-zinc-400">
                    {testimonial.location}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <SocialMediaButtons className="inline-flex rounded-3xl border border-about-bg p-1 bg-main-color" />
                </div>
              </div>
              <div className="flex items-center mb-4">
                <Ratings rating={testimonial.rating} />
              </div>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="flex lg:hidden justify-center lg:justify-end mt-4">
          <div className="p-2 border-about-bg border rounded-full">
            <Button onClick={prevTestimonial} className="p-2 rounded-full mr-4">
              {"<"}
            </Button>
            <Button onClick={nextTestimonial} className="p-2 rounded-full">
              {">"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
