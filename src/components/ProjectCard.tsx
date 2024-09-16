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
    <div className="lg:w-[300px] lg:h-[400px] w-[250px] outline outline-2 outline-black rounded-[7px] bg-transparent  transition ease-in-out hover:scale-105 hover:shadow-lg">
      <img src={props.imgURL} alt="Site" loading="lazy" className="rounded-[7px] h-[147px] w-full" />
      <div className="p-2">
        <h2 className="font-bold text-[26px]">{props.name}</h2>
        <div className="flex gap-2 underline pt-2">
          <a href={props.href} className="font-semibold hover:text-blue-500">
            Site
          </a>
          <a href={props.gitHub} className="font-semibold hover:text-blue-500">
            Github
          </a>
        </div>
        <p className=" text-sm">{props.description}</p>
        <div className="grid grid-cols-3 gap-x-5 gap-y-2 pt-5 pr-2 text-xs ">
          {props.tags.map((item) => (
            <div
              key={item}
              className="w-[75px] cursor-default scale-100 transition ease-in-out delay-80 hover:scale-110 hover:bg-black hover:text-white bg-transparent rounded-full text-center font-semibold border-2 border-black p-1 px-2"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
