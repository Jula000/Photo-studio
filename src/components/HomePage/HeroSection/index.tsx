"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import GlossyButton from "@/components/common/GlossyButton";

const HeroSection: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="relative container mx-auto text-white flex flex-col md:flex-row justify-between items-center px-10 py-5 font-manrope">
      <div className="flex flex-col z-10 md:py-20 sm:jusify-start self-start md:self-center">
        <span className="text-base uppercase text-zinc-400">
          Stunning Photography By
        </span>
        <h1 className="text-6xl font-bold mb-3 md:mb-0">Damien Braun</h1>
      </div>
      <div className="z-0 sm:hidden hidden md:block">
        <Image
          src="/hero-bg.svg"
          alt="Header background"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col uppercase font-semibold text-5xl z-10 self-start md:self-center">
        <div className="flex items-center">
          <span className="mr-2 font-bold">Let's</span>
          <GlossyButton
            onClick={handleClick}
            className="py-2 md:py-3 px-6 md:px-12"
          ></GlossyButton>
        </div>
        <span className="font-bold">Work Together</span>
      </div>
    </div>
  );
};

export default HeroSection;
