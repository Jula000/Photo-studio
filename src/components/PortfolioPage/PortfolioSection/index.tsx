import React from "react";
import Image from "next/image";

const brands = [
  { name: "Infinity Parker", logo: "/brands/logo1.png", width: 251 },
  { name: "Omega Million", logo: "/brands/logo2.png", width: 353 },
  { name: "WheelApp", logo: "/brands/logo3.png", width: 204 },
  { name: "High Country Club", logo: "/brands/logo4.png", width: 322 },
  { name: "EdgeKart", logo: "/brands/logo5.png", width: 183 },
];

const PortfolioSection: React.FC = () => {
  return (
    <div className="text-white py-16">
      <section className="container mx-auto px-4 text-start">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex-col">
            <p className="uppercase text-large text-zinc-400">Portfolio</p>
            <h1 className="md:text-3xl lg:text-3xl text-4xl 2xl:text-4xl  font-bold mb-4">
              VISUAL POETRY IN PIXELS
            </h1>
          </div>
          <div
            className="h-20 lg:w-7/12 xl:w-4/6 rounded-3xl bg-cover bg-center hidden md:block"
            style={{ backgroundImage: "url('/kytsya.jpg')" }}
          ></div>
        </div>

        <p className="text-lg leading-relaxed mb-8 text-zinc-400">
          Step into a visual journey that encapsulates the essence of my lens.
          Each photograph in this portfolio is a narrative, a frozen moment in
          time, and a testament to the artistry and passion poured into every
          frame. Explore the diverse tapestry of stories I've had the privilege
          to capture and witness the world through my lens.
        </p>
        <section className="container mx-auto px-4 mb-16">
          <div
            className="relative w-full h-96 rounded-3xl overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/kytsya.jpg')" }}
          ></div>
        </section>
        <h2 className="mb-4 uppercase text-zinc-400 text-center">
          brands i have worked with
        </h2>
      </section>
      <div className="flex flex-wrap justify-center  bg-zinc-900">
        {brands.map((brand, index) => (
          <div key={index} className="p-4">
            <Image
              src={brand.logo}
              alt={brand.name}
              height={50}
              width={brand.width}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
