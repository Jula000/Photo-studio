import React from "react";
import BackgroundImage from "@/components/common/BackgroundImage";

const ServicesSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-zinc-400 border-b border-about-bg mb-10">
      <div className="flex justify-between">
        <div className="flex-cols">
          <p className="uppercase text-base text-zinc-400">Services</p>
          <h2 className="text-3xl font-bold mb-4 text-white uppercase">
            Diverse Photography Offerings
          </h2>
        </div>
        <BackgroundImage
          src="/ServicesSection-top.jpg"
          className="lg:w-7/12 xl:w-4/6 self-start hidden md:block"
          height="h-28"
        />
      </div>
      <p className="text-lg leading-relaxed">
        Unlock the full spectrum of professional photography services tailored
        to your vision. From timeless portraits to captivating event coverage, I
        bring a unique blend of creativity and technical expertise to each
        project.
      </p>
      <div className="container mx-auto px-4 mb-4 pt-8">
        <BackgroundImage src="/ServicesSection-bot.jpg" />
      </div>
    </section>
  );
};

export default ServicesSection;
