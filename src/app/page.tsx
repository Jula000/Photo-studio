import HeroSection from "../components/HomePage/HeroSection";
import Header from "../components/common/Header";
import PhotoGrid from "../components/HomePage/PhotoGrid";
import AboutSection from "../components/HomePage/AboutSection";
import ServiceSection from "../components/HomePage/ServiceSection";
import Portfolio from "../components/HomePage/Portfolio";
import FaqSection from "../components/HomePage/FaqSection";
import Footer from "@/components/common/Footer";
import Testimonials from "@/components/HomePage/Testimonials";
import Marquee from "@/components/common/Marquee";

export default function Home() {
  return (
    <main className="flex flex-col bg-main-color">
      <Header />
      <HeroSection />
      <PhotoGrid />
      <AboutSection />
      <ServiceSection />
      <Portfolio />
      <FaqSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
