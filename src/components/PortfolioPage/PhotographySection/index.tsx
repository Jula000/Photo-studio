"use client";
import React, { useState, useEffect } from "react";
import ProjectList from "@/components/common/ProjectList";
import Button from "@/components/common/Button";

type Category = "portraits" | "events" | "commercial";

type Project = {
  title: string;
  date: string;
  image: string;
  category: Category;
};

const PhotographySection: React.FC = () => {
  const [projects, setProjects] = useState<Record<Category, Project[]>>({
    portraits: [],
    events: [],
    commercial: [],
  });
  const [currentIndex, setCurrentIndex] = useState<Record<Category, number>>({
    portraits: 0,
    events: 0,
    commercial: 0,
  });
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response Data:", data);

        if (data.projects) {
          const groupedProjects: Record<Category, Project[]> = {
            portraits: data.projects.filter(
              (project: Project) => project.category === "portraits"
            ),
            events: data.projects.filter(
              (project: Project) => project.category === "events"
            ),
            commercial: data.projects.filter(
              (project: Project) => project.category === "commercial"
            ),
          };

          setProjects(groupedProjects);
        } else {
          console.error("API response does not contain 'projects'");
          setProjects({
            portraits: [],
            events: [],
            commercial: [],
          });
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

  const nextImage = (category: Category) => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex[category] + visibleCount;
      const maxIndex = projects[category].length;
      return {
        ...prevIndex,
        [category]: nextIndex >= maxIndex ? 0 : nextIndex,
      };
    });
  };

  const prevImage = (category: Category) => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex[category] - visibleCount;
      const maxIndex = projects[category].length;
      return {
        ...prevIndex,
        [category]: nextIndex < 0 ? maxIndex - visibleCount : nextIndex,
      };
    });
  };

  const getVisibleProjects = (category: Category) => {
    const projectsInCategory = projects[category];
    const start = currentIndex[category];
    const visibleProjects = projectsInCategory.slice(
      start,
      start + visibleCount
    );
    if (visibleProjects.length < visibleCount) {
      return [
        ...visibleProjects,
        ...projectsInCategory.slice(0, visibleCount - visibleProjects.length),
      ];
    }
    return visibleProjects;
  };

  return (
    <div className="text-white py-16">
      {(["portraits", "events", "commercial"] as Category[]).map((category) => (
        <section
          key={category}
          className="container mx-auto px-4 mt-12 border-t border-about-bg py-12"
        >
          <div className="flex flex-row justify-between mb-8">
            <h1 className="text-4xl font-bold ">
              {category.toUpperCase()} PHOTOGRAPHY
            </h1>
            <div className="border border-about-bg rounded-full space-x-4 p-2 hidden lg:flex mr-4 items-center">
              <Button
                className="p-2 rounded-full"
                onClick={() => prevImage(category)}
              >
                {"<"}
              </Button>
              <Button
                className="p-2 rounded-full"
                onClick={() => nextImage(category)}
              >
                {">"}
              </Button>
            </div>
          </div>
          <ProjectList projects={getVisibleProjects(category)} />
          <div className="flex lg:hidden justify-center lg:justify-end mt-4">
            <div className="p-2 border-about-bg border rounded-full">
              <Button
                className="p-2 rounded-full mr-4"
                onClick={() => prevImage(category)}
              >
                {"<"}
              </Button>
              <Button
                className="p-2 rounded-full"
                onClick={() => nextImage(category)}
              >
                {">"}
              </Button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default PhotographySection;
