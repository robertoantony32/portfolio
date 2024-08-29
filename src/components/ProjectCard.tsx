interface ProjectCardProps {
    name: string;
    href: string;
    imgURL: string;
    gitHub: string;
    description: string;
    tags: string[];
}


export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="max-w-[320px] outline outline-[1px] outline-black outline-offset-4 rounded-[7px] ">
      <img src={props.imgURL} alt="Site" loading="lazy" className="rounded-[7px] max-h-[147px] w-full" />
      <div className="p-4">
        <h2 className="font-bold text-[26px]">{props.name}</h2>
        <div className="flex gap-2 underline pt-2">
          <a href={props.href} className="font-semibold hover:text-blue-500">
            Site
          </a>
          <a href={props.gitHub} className="font-semibold hover:text-blue-500">
            Github
          </a>
        </div>
        <p className=" text-justify">{props.description}</p>
        <div className="flex flex-wrap gap-2 pt-5">
          {props.tags.map((item) => (
            <div
              key={item}
              className=" cursor-default scale-100 transition ease-in-out delay-80 hover:scale-110 hover:bg-black hover:text-white bg-transparent rounded-full text-center font-semibold border-2 border-black p-1 px-2"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
