import React from "react";
import Link from "next/link";
import SocialMediaButtons from "./SocialMediaButtons";
import GlossyButton from "./GlossyButton";

const Footer = () => {
  return (
    <footer className="pt-10 text-white">
      <div className="container mx-auto px-4">
        <section className="py-20 text-center lg:text-right">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white/40">
            DAMIEN
          </h1>
        </section>
      </div>
      <div className="border-t border-about-bg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:border-l lg:border-r border-about-bg">
            <div className="lg:w-1/3 px-4 md:py-12 border-r border-l border-b lg:border-b-transparent border-about-bg">
              <h2 className="text-base font-semibold text-zinc-400 pb-5 pt-12 lg:pt-0">
                A MORE MEANINGFUL HOME FOR PHOTOGRAPHY
              </h2>
              <div className="flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="text-3xl lg:text-5xl font-semibold">
                    Let's
                  </span>
                  <GlossyButton className="h-16 ml-2 lg:ml-4 px-6 lg:px-12" />
                </div>
                <span className="text-3xl lg:text-5xl font-bold">
                  Work Together
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:flex lg:justify-between lg:flex-grow pt-10 lg:mt-0 lg:px-10 md:px-10 border-r border-l md:border-r md:border-l border-about-bg">
              {[
                {
                  title: "HOME",
                  links: [
                    { text: "About Me", href: "/about" },
                    { text: "My Works", href: "/works" },
                    { text: "Testimonials", href: "/testimonials" },
                  ],
                },
                {
                  title: "CLIENTS",
                  links: [
                    { text: "Klovesto", href: "#" },
                    { text: "Nukeway", href: "#" },
                    { text: "Cloven's", href: "#" },
                    { text: "Menvol", href: "#" },
                  ],
                },
                {
                  title: "PORTFOLIO",
                  links: [
                    { text: "Events", href: "#" },
                    { text: "Portrait", href: "#" },
                    { text: "Branding", href: "#" },
                    { text: "Commerciale", href: "#" },
                    { text: "Wedding", href: "#" },
                  ],
                },
                {
                  title: "SERVICES",
                  links: [
                    { text: "Portraits", href: "#" },
                    { text: "Events", href: "#" },
                    { text: "Commercial", href: "#" },
                  ],
                },
              ].map((section, index) => (
                <div key={index} className="w-full mb-6 lg:mb-0 px-4 lg:px-0">
                  <h3 className="font-semibold text-zinc-600">
                    {section.title}
                  </h3>
                  <ul className="mt-2 space-y-2 flex flex-col">
                    {section.links.map((link, linkIndex) => (
                      <li
                        key={linkIndex}
                        className="border-b border-about-bg pb-1 inline-block w-max"
                      >
                        <Link href={link.href}>{link.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-about-bg py-8">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              <Link href="/terms">Terms & Conditions</Link>
              {" | "}
              <Link href="/privacy">Privacy Policy</Link>
            </div>
            <div className="mb-4 md:mb-0">
              <SocialMediaButtons />
            </div>
            <div className="text-sm">
              &copy; 2024 Damien Braun Photography. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
