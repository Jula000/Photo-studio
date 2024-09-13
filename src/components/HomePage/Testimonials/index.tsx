"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../../common/Button";
import SocialMediaButtons from "../../common/SocialMediaButtons";
import Ratings from "./Ratings";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Emily Johnson",
    location: "USA, California",
    rating: 5,
    text: "Damien's photography doesn't just capture moments; it captures emotions. His work is simply mesmerizing.",
  },
  {
    name: "John Smith",
    location: "USA, California",
    rating: 5,
    text: "Damien has an incredible talent for making every event feel effortless, and the results speak for themselves.",
  },
  {
    name: "Samantha Davis",
    location: "USA, California",
    rating: 5,
    text: "I was blown away by Damien's ability to capture the essence of our wedding day. His photographs are our cherished memories.",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
    );
  };

  return (
    <div className="text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-sm font-semibold uppercase text-zinc-400">
          Testimonials
        </h2>
        <h1 className="text-4xl font-bold mb-6">What My Clients Say</h1>
        <p className="mb-2 text-zinc-400">Total Reviews</p>
        <div className="border-b border-about-bg pb-10 flex flex-col sm:flex-col md:flex-row">
          <p className="text-2xl font-bold mr-3 sself-start sm:self-start md:self-center">
            323
          </p>
          <div className="flex items-center">
            <div className="border border-about-bg rounded-full space-x-4 p-2 hidden lg:flex mr-2">
              <Button onClick={prevTestimonial} className="p-2 rounded-full">
                {"<"}
              </Button>
              <Button onClick={nextTestimonial} className="p-2 rounded-full">
                {">"}
              </Button>
            </div>
            <Link href="/all-testimonials">
              <Button className="px-6 py-3 rounded-lg">
                View All Testimonials →
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex-shrink-0 flex flex-col w-[100%] lg:w-[calc(33.333%-1rem)] sm:w-[100%] ${
                index === currentIndex ? "block" : "hidden lg:block"
              }`}
            >
              <div className="bg-zinc-800 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {testimonial.name}
                    </h3>
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
            </div>
          ))}
        </div>
        <div className="flex sm:hidden justify-center md:justify-end mt-4">
          <div className="p-2 border-about-bg border rounded-full">
            <Button className="p-2 rounded-full mr-4">{"<"}</Button>
            <Button className="p-2 rounded-full">{">"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
