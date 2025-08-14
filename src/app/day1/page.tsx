"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Dot } from "lucide-react";
import { useRef, useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const timelineRef = useRef<GSAPTimeline>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const preOrderBtnRef = useRef<HTMLButtonElement>(null);

  const listItems = [
    { title: "Home" },
    { title: "Sound" },
    { title: "Craft" },
    { title: "Controls" },
    { title: "Power" },
    { title: "Specs" },
  ];

  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    const tl = gsap.timeline({ paused: true });

    tl.to(navRef.current, { height: 457, duration: 0.25, ease: "power3.Out" });
    tl.to(navRef.current, { backgroundColor: "#20252d", duration: 0.15 }, "<");
    tl.to(navRef.current, { backgroundColor: "#0a1119" }, "<+0.15");

    const listSplit = SplitText.create(".list-entry", { type: "lines", mask: "lines" });
    tl.from(listSplit.lines, { y: -50, stagger: 0.05 }, "<");

    tl.from(preOrderBtnRef.current, { filter: "blur(3px)", opacity: 0 }, ">-0.4");
    timelineRef.current = tl;
  });

  function handleClick() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
    setIsOpen((prev) => !prev);
  }

  function openMenu() {
    timelineRef.current?.timeScale(1);
    timelineRef.current?.play();
  }

  function closeMenu() {
    timelineRef.current?.timeScale(1.8);
    timelineRef.current?.reverse();
  }

  return (
    <div className="!font-manrope flex h-full w-full items-start justify-center bg-slate-800 p-8 text-white">
      <nav ref={navRef} className="h-10 w-sm overflow-hidden rounded-xl bg-[#171e26] p-3">
        <button
          onClick={handleClick}
          className="group flex w-full items-center justify-between pb-5 text-left text-xs uppercase"
        >
          Menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 23 16"
            fill="none"
            aria-hidden="true"
            className="h-4 w-fit group-hover:animate-pulse"
          >
            <circle
              cx="1.59766"
              cy="1.6709"
              r="1.25"
              fill="currentColor"
              data-svg-origin="1.597659945487976 1.6708999872207642"
              transform="matrix(1,0,0,1,0,0)"
            ></circle>
            <circle
              cx="11.6719"
              cy="1.6709"
              r="1.25"
              fill="currentColor"
              data-svg-origin="11.671899795532227 1.6708999872207642"
              transform="matrix(1,0,0,1,0,0)"
            ></circle>
            <circle
              cx="21.75"
              cy="1.6709"
              r="1.25"
              fill="currentColor"
              data-svg-origin="21.75 1.6708999872207642"
              transform="matrix(1,0,0,1,0,0)"
            ></circle>
            <circle
              cx="1.59766"
              cy="14.3301"
              r="1.25"
              fill="currentColor"
              data-svg-origin="1.597659945487976 14.330100059509277"
              transform="matrix(1,0,0,1,0,0)"
            ></circle>
            <circle
              cx="11.6719"
              cy="14.3301"
              r="1.25"
              fill="currentColor"
              data-svg-origin="11.671899795532227 14.330100059509277"
              transform="matrix(1,0,0,1,0,0)"
            ></circle>
            <circle
              cx="21.75"
              cy="14.3301"
              r="1.25"
              fill="currentColor"
              data-svg-origin="21.75 14.330100059509277"
              transform="matrix(1,0,0,1,0,0)"
            ></circle>
          </svg>
        </button>
        <div className="h-[1px] w-full bg-[#20252d]"></div>
        <ul className="flex flex-col gap-2 py-10">
          {listItems.map((item, i) => (
            <li key={i}>
              <button
                className={
                  (activePage === item.title ? "!text-white" : "text-white/10") +
                  " list-entry text-4xl transition-colors hover:text-neutral-500"
                }
                onClick={() => setActivePage(item.title)}
              >
                <div className="flex items-center gap-2">
                  <Dot size={20} /> <p>{item.title}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
        <button
          ref={preOrderBtnRef}
          className="w-full rounded-full bg-[#4d5258] py-2 text-sm text-[#0a1119] transition-colors duration-300 hover:bg-white"
        >
          Preorder
        </button>
      </nav>
    </div>
  );
}
