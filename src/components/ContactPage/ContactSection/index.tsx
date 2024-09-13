import React from "react";
import SocialMediaButtons from "@/components/common/SocialMediaButtons";
import Button from "@/components/common/Button";
import BackgroundImage from "@/components/common/BackgroundImage";

const ContactSection: React.FC = () => {
  return (
    <div className="text-white flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-12">
        <div className="md:w-1/2 mb-8 md:mb-0 mr-3">
          <h3 className="text-base uppercase mb-2 text-zinc-400">Contact Me</h3>
          <h1 className="text-4xl font-bold mb-4">Get In Touch With Me</h1>
          <p className="text-lg mb-8">
            Step into a world of timeless photography with Damien Braun. Explore
            our range of photography services, each crafted to tell your unique
            story through captivating images. Whether it's the magic of
            portraits, the emotion of events, or the allure of commercial
            photography, we're here to bring your vision to life.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <BackgroundImage src="/contact-page.jpg" height="h-80">
            <div className="bottom-1/2 -right-4 bg-main-color px-4 py-4 rounded-full absolute hidden md:flex">
              <SocialMediaButtons className="rounded-full border border-about-bg px-2 py-2" />
            </div>
          </BackgroundImage>
        </div>
        <div className="flex md:hidden justify-center lg:justify-end mt-4">
          <div className="p-2">
            <SocialMediaButtons className="rounded-full border border-about-bg px-2 py-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
