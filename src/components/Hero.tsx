import Image from "next/image";

const technologies = [
  "Typescript",
  "Javascript",
  "Next.js",
  "React.js",
  "Tailwind",
  "Sass",
  "HTML",
  "CSS",
  "C#",
  "Unity",
];

export function Hero() {
  return (
    <section className="max-w-[1280px] py-28 flex flex-col xl:flex-row-reverse justify-center items-center gap-16 bg-white rounded-xl outline-1">
      <img
        src="images/profile/profile.jpeg"
        loading="lazy"
        alt="foto de roberto"
        className="size-2/5 lg:size-1/5 rounded-xl shadow-xl outline outline-2 outline-offset-4 shadow-2xl"
      />
      <div className="text-center xl:text-left max-w-[280px] sm:max-w-[375px] md:max-w-[670px] lg:max-w-[700px] ">
        <h1 className="font-bold text-[25px] sm:text-[50px] md:text-[60px] lg:text-[80px] mb-4 leading-none">
          Transforme ideias em código!
        </h1>
        <h3 className="mb-4 font-medium leading-relaxed">
          Olá! Me chamo{" "}
          <em className="underline">Roberto Gonçalves</em>, sou
          desenvolvedor front-end e estou à 4 anos engajado nos estudos em programação. Vamos conversar?
        </h3>
        <div className=" flex flex-col gap-2 pt-2 mb-4">
          <h3 className="font-bold text-xl">Tecnologias</h3>
          <div className="flex flex-row items-center gap-2 pt-2 mb-4 group relative overflow-hidden">
            <div className="flex flex-row w-max items-center animate-loop-scroll group-hover:paused gap-2 whitespace-nowrap">
              {technologies.concat(technologies).map((item) => (
                <div
                  key={item}
                  className="transition ease-in-out delay-50 cursor-default scale-100 hover:scale-105 hover:bg-black hover:text-white bg-transparent rounded-full text-center font-semibold border-2 border-black p-1 px-2"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-6 pt-10 items-center lg:justify-start">
          <a   href="/CVRoberto.pdf" download="Curriculo_Roberto_Goncalves.pdf" className="max-w-[170px] bg-white text-black rounded-xl text-[25px] p-2  font-semibold transition delay-150 ease-in-out  hover:scale-105 hover:shadow-2xl outline hover:bg-black hover:text-white">
            Baixar CV
          </a>
          
        </div>
      </div>
    </section>
  );
}
