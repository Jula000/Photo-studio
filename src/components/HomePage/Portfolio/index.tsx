import React from "react";
import ProjectList from "../../common/ProjectList";
import Button from "@/components/common/Button";
import Link from "next/link";

const projects = [
  {
    title: "Faces of Resilience",
    date: "March 2022",
    image: "/kytsya.jpg",
    link: "/faces-of-resilience",
  },
  {
    title: "A Wedding Tale",
    date: "January 2020",
    image: "/kytsya.jpg",
    link: "/a-wedding-tale",
  },
  {
    title: "Product Elegance",
    date: "January 2020",
    image: "/kytsya.jpg",
    link: "/product-elegance",
  },
  {
    title: "Product Elegance",
    date: "January 2020",
    image: "/kytsya.jpg",
    link: "/product-elegance",
  },
  {
    title: "A Wedding Tale",
    date: "January 2020",
    image: "/kytsya.jpg",
    link: "/a-wedding-tale",
  },
];

const Portfolio: React.FC = () => {
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
              <Button className="p-2 rounded-full">{"<"}</Button>
              <Button className="p-2 rounded-full">{">"}</Button>
            </div>
            <Button className="w-full sm:w-auto px-4 py-2 text-center">
              View All Services →
            </Button>
          </div>
        </div>
        <ProjectList projects={projects} />
        <div className="flex lg:hidden justify-center lg:justify-end mt-4">
          <div className="p-2 border-about-bg border rounded-full">
            <Button className="p-2 rounded-full mr-4">{"<"}</Button>
            <Button className="p-2 rounded-full">{">"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
