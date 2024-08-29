import Link from "next/link";

export function Header() {
  return (
    <header className="min-w-[150px] h-12 flex justify-center mb-10 lg:mb-0 lg:justify-start">
      <nav className="flex gap-4 bg-white px-4 lg:px-4 h-12 items-center rounded-xl fixed">
        {[
          { name: "Github", imgLink: "icons/github.png", link: "https://github.com/robertoantony32" },
          { name: "Linkedin", imgLink: "icons/linkedin.svg", link: "https://www.linkedin.com/in/roberto-antônio/" },
        ].map((item) => (
          <a key={item.name} className="size-8" href={item.link}>
            <img src={item.imgLink} alt={item.name} />
          </a>
        ))}
      </nav>
    </header>
  );
}
