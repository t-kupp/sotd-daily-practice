import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const pages = [
    {
      day: 1,
      title: "Open/close menu animation",
      sodt: {
        name: "AETHER1",
        url: "https://www.aether1.ai/",
      },
    },
    {
      day: 2,
      title: "Double border button",
      sodt: {
        name: "The Symphony of Vines",
        url: "https://symphonyofvines.unseen.co/",
      },
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <div className="w-full max-w-4xl text-2xl">
        {pages.map((page, i) => (
          <div className="my-4 flex items-center justify-between gap-4" key={i}>
            <span className="">{page.day < 10 ? `0${page.day}` : page.day} </span>
            <Link className="group" href={`/day${page.day}`}>
              <div className="mx-auto flex w-fit items-center gap-2 bg-black px-3 py-1 text-white hover:bg-black/80">
                {page.title}
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <div className="flex-1">
              <a
                className="group ml-auto flex w-fit items-center gap-1 px-3 py-1 text-right hover:bg-black hover:text-white"
                target="_blank"
                href={page.sodt.url}
              >
                {page.sodt.name}
                <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
