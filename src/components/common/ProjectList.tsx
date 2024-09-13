import Link from "next/link";
import Button from "./Button";

interface Project {
  title: string;
  date: string;
  image: string;
}

interface Props {
  projects: Project[];
}

const ProjectList: React.FC<Props> = ({ projects }) => (
  <div className="container mx-auto">
    <div className="flex overflow-hidden gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex-shrink-0 flex flex-col w-[100%] lg:w-[calc(33.333%-1rem)] sm:w-[100%]"
        >
          <div className="w-full pt-[100%] relative overflow-hidden rounded-lg">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={project.image}
              alt={project.title}
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-zinc-400">{project.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectList;
