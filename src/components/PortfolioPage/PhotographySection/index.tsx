import React from "react";
import ProjectList from "@/components/common/ProjectList";
import Button from "@/components/common/Button";

const projects = {
  portraits: [
    {
      title: "Faces of Resilience",
      date: "March 2022",
      image: "/kytsya.jpg",
      link: "/projects/faces-of-resilience",
    },
    {
      title: "Innocence Unveiled",
      date: "January 2020",
      image: "/kytsya.jpg",
      link: "/projects/innocence-unveiled",
    },
    {
      title: "Elegance in Monochrome",
      date: "January 2023",
      image: "/kytsya.jpg",
      link: "/projects/elegance-in-monochrome",
    },
  ],
  events: [
    {
      title: "A Wedding Tale",
      date: "September 2022",
      image: "/kytsya.jpg",
      link: "/projects/a-wedding-tale",
    },
    {
      title: "Corporate Excellence Summit",
      date: "November 2019",
      image: "/kytsya.jpg",
      link: "/projects/corporate-excellence-summit",
    },
    {
      title: "Festival of Colors",
      date: "March 2018",
      image: "/kytsya.jpg",
      link: "/projects/festival-of-colors",
    },
  ],
  commercial: [
    {
      title: "Product Elegance",
      date: "August 2020",
      image: "/kytsya.jpg",
      link: "/projects/product-elegance",
    },
    {
      title: "Brand Storytelling",
      date: "May 2019",
      image: "/kytsya.jpg",
      link: "/projects/brand-storytelling",
    },
    {
      title: "Culinary Delights",
      date: "February 2017",
      image: "/kytsya.jpg",
      link: "/projects/culinary-delights",
    },
  ],
};

const PhotographySection: React.FC = () => {
  return (
    <div className="text-white py-16">
      <section className="container mx-auto px-4 mt-12 border-t border-about-bg py-12">
        <div className="flex flex-row justify-between mb-8">
          <h1 className="text-4xl font-bold ">PORTRAITS PHOTOGRAPHY</h1>
          <div className="border border-about-bg rounded-full space-x-4 p-2 hidden lg:flex mr-4 items-center">
            <Button className="p-2 rounded-full">{"<"}</Button>
            <Button className="p-2 rounded-full">{">"}</Button>
          </div>
        </div>
        <ProjectList projects={projects.portraits} />
        <div className="flex lg:hidden justify-center lg:justify-end mt-4">
          <div className="p-2 border-about-bg border rounded-full">
            <Button className="p-2 rounded-full mr-4">{"<"}</Button>
            <Button className="p-2 rounded-full">{">"}</Button>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 mt-12 border-t border-about-bg py-12">
        <div className="flex flex-row justify-between mb-8">
          <h1 className="text-4xl font-bold ">PORTRAITS PHOTOGRAPHY</h1>
          <div className="border border-about-bg rounded-full space-x-4 p-2 hidden lg:flex mr-4 items-center">
            <Button className="p-2 rounded-full">{"<"}</Button>
            <Button className="p-2 rounded-full">{">"}</Button>
          </div>
        </div>
        <ProjectList projects={projects.events} />
        <div className="flex lg:hidden justify-center lg:justify-end mt-4">
          <div className="p-2 border-about-bg border rounded-full">
            <Button className="p-2 rounded-full mr-4">{"<"}</Button>
            <Button className="p-2 rounded-full">{">"}</Button>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 mt-12 border-t border-about-bg py-12">
        <div className="flex flex-row justify-between mb-8">
          <h1 className="text-4xl font-bold ">PORTRAITS PHOTOGRAPHY</h1>
          <div className="border border-about-bg rounded-full space-x-4 p-2 hidden lg:flex mr-4 items-center">
            <Button className="p-2 rounded-full">{"<"}</Button>
            <Button className="p-2 rounded-full">{">"}</Button>
          </div>
        </div>
        <ProjectList projects={projects.commercial} />
        <div className="flex lg:hidden justify-center lg:justify-end mt-4">
          <div className="p-2 border-about-bg border rounded-full">
            <Button className="p-2 rounded-full mr-4">{"<"}</Button>
            <Button className="p-2 rounded-full">{">"}</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotographySection;
