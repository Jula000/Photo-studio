import React from "react";
import Image from "next/image";
import SocialMediaButtons from "../../common/SocialMediaButtons";
import Section from "../../common/Section";
import Button from "../../common/Button";

const AboutSection: React.FC = () => {
  return (
    <div className="text-white flex items-center justify-center">
      <div className="container mx-auto p-6 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between border-b border-about-bg pb-6">
          <div>
            <p className="uppercase text-base text-zinc-400">About</p>
            <h1 className="text-4xl font-bold">I AM DAMIEN</h1>
          </div>
          <Button className="w-full sm:w-auto px-4 py-2 text-center self-center">
            Know More
          </Button>
        </div>
        <div className="relative flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="relative w-full md:w-1/2 h-80">
            <Image
              src="/kytsya.jpg"
              alt="Damien"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-4 w-full md:w-1/2">
            <Section title="Introduction">
              <p>
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary, to freeze fleeting
                moments in time, and to share the world's beauty as I see it.
                Based in the enchanting landscapes of the USA, I find
                inspiration in every corner of this diverse and vibrant country.
                Join me as we embark on a visual odyssey, where each photograph
                tells a story, and every frame is a piece of my heart.
              </p>
            </Section>
            <Section title="Contact Information">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <ul className="mb-4 md:mb-0 md:mr-8">
                  <p className="font-semibold">Email:</p>
                  <li className="text-sm">damienbraun@gmail.com</li>
                </ul>
                <ul className="mb-4 md:mb-0 md:mr-8">
                  <p className="font-semibold">Phone:</p>
                  <li className="text-sm">+00000000000</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row justify-center sm:justify-start">
                <SocialMediaButtons className="mb-2 sm:mb-0 mr-4" />
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-2">
                  <Button className="text-sm px-4 py-2 rounded hover:bg-zinc-700 w-full sm:w-auto">
                    Let's Work
                  </Button>
                  <Button className="text-sm px-4 py-2 rounded hover:bg-zinc-700 w-full sm:w-auto">
                    Download CV
                  </Button>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
