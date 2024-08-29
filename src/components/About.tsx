import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects"

export function Projects() {
  return (
    <section className="max-w-[1280px] mt-16 pl-20 py-16 flex flex-col xl:flex-row-reverse justify-center items-center gap-16 bg-white rounded-xl outline-1">
      <div className="flex w-full ">
        <div className="text-left max-w-full sm:max-w-[375px] md:max-w-[700px] lg:max-w-full flex-col">
          <h1 className="font-bold text-[25px] sm:text-[50px] md:text-[60px] lg:text-[80px] mb-4 leading-none">
            Projetos
          </h1>
          <div className="px-10 pt-10 flex flex-col lg:flex-row gap-10">
            {
              projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
