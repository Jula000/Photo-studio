"use client";
import React, { useState, useEffect } from "react";
import ProjectList from "../../common/ProjectList";
import Button from "@/components/common/Button";

const PortfolioSection = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/portfolio");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Витягніть масив проектів з об'єкта
        if (data && Array.isArray(data.projects)) {
          setProjects(data.projects);
        } else {
          console.error("Unexpected API response format:", data);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
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

  const nextImage = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + visibleCount;
      return nextIndex >= projects.length ? 0 : nextIndex;
    });
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - visibleCount;
      return nextIndex < 0 ? projects.length - visibleCount : nextIndex;
    });
  };

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  const paddedProjects =
    visibleProjects.length < visibleCount
      ? [
          ...visibleProjects,
          ...projects.slice(0, visibleCount - visibleProjects.length),
        ]
      : visibleProjects;

  return (
    <div className="text-white py-12 p-6">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between mb-6 border-b border-about-bg pb-5">
          <div>
            <h3 className="uppercase text-base text-zinc-400">Portfolio</h3>
            <h1 className="text-4xl font-bold uppercase">
              Explore My Photography Work
            </h1>
          </div>
          <div className="flex items-center">
            <div className="border border-about-bg rounded-full space-x-4 p-2 hidden lg:flex mr-4">
              <Button onClick={prevImage} className="p-2 rounded-full">
                {"<"}
              </Button>
              <Button onClick={nextImage} className="p-2 rounded-full">
                {">"}
              </Button>
            </div>
            <Button className="w-full sm:w-auto px-4 py-2 text-center">
              View All Services →
            </Button>
          </div>
        </div>

        <div className="overflow-hidden">
          <ProjectList projects={paddedProjects} />
        </div>

        <div className="flex lg:hidden justify-center lg:justify-end mt-4">
          <div className="p-2 border-about-bg border rounded-full">
            <Button onClick={prevImage} className="p-2 rounded-full mr-4">
              {"<"}
            </Button>
            <Button onClick={nextImage} className="p-2 rounded-full">
              {">"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
