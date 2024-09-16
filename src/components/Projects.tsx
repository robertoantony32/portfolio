import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="max-w-[1280px] mt-16 pl-10 md:pl-20 py-16 bg-white rounded-xl outline-1">
      <div className="text-left w-full flex-col">
        <h1 className="font-bold text-[25px] sm:text-[50px] md:text-[60px] lg:text-[80px] mb-4 leading-none">
          Projetos
        </h1>
        <div className="pt-10 justify-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
