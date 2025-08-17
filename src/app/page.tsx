import { ArrowUpRight } from "lucide-react";
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
    {
      day: 3,
      title: "Fade-in text",
      sodt: {
        name: "Ethical Life",
        url: "https://ethicallifeworld.com/",
      },
    },
    {
      day: 4,
      title: "Images on mouse move",
      sodt: {
        name: "Inertia Studios",
        url: "https://www.weareinertia.com/",
      },
    },
  ];

  return (
    <div className="grid h-full w-full grid-cols-1 gap-2 p-2 text-[clamp(14px,2vw,24px)] lg:grid-cols-2 lg:gap-4 lg:p-4">
      <div className="w-full border border-black/10 p-4">
        <div className="flex h-full max-w-1/2 flex-col justify-between">
          <h1 className="text-[clamp(22px,3.5vw,40px)] leading-tight font-medium">
            Daily Creative Design Exercise
          </h1>
          <p className="text-[clamp(12px,1.5vw,20px)] leading-tight">
            I recreate components from Awwwards winners to develop advanced frontend animation and
            interaction skills using GSAP and creative coding techniques.
          </p>
        </div>
      </div>
      <div className="flex w-full items-end border border-black/10 p-4">
        <ul className="w-full">
          {pages.map((page, i) => (
            <li key={page.day}>
              <div className="flex">
                <Link
                  href={`/day${page.day}`}
                  className="w-full transition-opacity hover:opacity-50"
                >
                  <div className="flex w-full gap-4">
                    <p>
                      {page.day < 10 && "0"}
                      {page.day}
                    </p>
                    <p>{page.title}</p>
                  </div>
                </Link>
                <a
                  target="_blank"
                  href={page.sodt.url}
                  className="group flex items-center px-1 transition-opacity hover:opacity-50"
                >
                  src{" "}
                  <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              {i != pages.length - 1 && <div className="my-1 h-[1px] bg-black/10"></div>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
