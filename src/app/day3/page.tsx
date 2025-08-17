"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const img1ContainerRef = useRef<HTMLDivElement>(null);
  const img2ContainerRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        end: "+=3000",
        scrub: 1,
        pin: true,
      },
    });

    const h2Split = SplitText.create(textRef.current, {
      type: "chars,words,lines",
      mask: "chars",
      charsClass: "opacity-0",
      wordsClass: "z-10",
      linesClass: "text-nowrap",
    });
    tl.to(h2Split.chars, { opacity: 1, stagger: 0.05, ease: "none" });
    tl.to([img1ContainerRef.current, img2ContainerRef.current], { width: "12%" });
    tl.to([img1Ref.current, img2Ref.current], { scaleX: 1 }, "<");
  });

  return (
    <div
      ref={containerRef}
      className="flex h-full w-full items-center justify-center bg-[#dcf343] text-black"
    >
      <h2
        ref={textRef}
        className="max-w-[80%] text-center font-sans text-[calc(1.45rem+2vw)] leading-[1] font-semibold tracking-tighter opacity-100"
      >
        Lorem Picsum{" "}
        <div ref={img1ContainerRef} className="relative inline-block w-0">
          <div
            ref={img1Ref}
            className="absolute inline-block aspect-[300/179] h-[calc(1.45rem+2vw*3)] -translate-x-1/2 -translate-y-2/3 scale-x-0"
          >
            <Image
              alt=""
              width={300}
              height={179}
              className="h-full w-full rounded-3xl object-cover"
              src={"/day3/img1.png"}
            />
          </div>
        </div>
        provides a placeholder image service for web developers{" "}
        <div ref={img2ContainerRef} className="relative inline-block w-0">
          <div
            ref={img2Ref}
            className="absolute inline-block aspect-[300/179] h-[calc(1.45rem+2vw*3)] -translate-x-1/2 -translate-y-2/3 scale-x-0"
          >
            <Image
              alt=""
              width={300}
              height={179}
              className="h-full w-full rounded-3xl object-cover"
              src={"/day3/img2.png"}
            />
          </div>
        </div>
        to streamline prototyping.
      </h2>
    </div>
  );
}
