import Link from "next/link";
import Button from "./Button";

interface Project {
  title: string;
  date: string;
  image: string;
  link: string;
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
          <Link href={project.link}>
            <div className="project-image-container">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
            </div>
          </Link>
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
