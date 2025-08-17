"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Image {
  id: string;
  x: number;
  y: number;
  src: string;
}

export default function Page() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const imageData = [
      { id: 0, src: "/day4/img1.png" },
      { id: 1, src: "/day4/img2.png" },
      { id: 2, src: "/day4/img3.png" },
      { id: 3, src: "/day4/img4.png" },
      { id: 4, src: "/day4/img5.png" },
    ];

    let counter = 0;
    let i = 0;

    const getEventCoordinates = (e: MouseEvent | TouchEvent) => {
      if ("clientX" in e) {
        return { x: e.clientX, y: e.clientY };
      } else {
        return {
          x: e.touches[0]?.clientX || 0,
          y: e.touches[0]?.clientY || 0,
        };
      }
    };

    function handleMouseMove(e: MouseEvent | TouchEvent) {
      counter++;
      const uuid = "img" + Math.random().toString(36).substring(2, 15);

      if (counter % 10 === 0) {
        const { x, y } = getEventCoordinates(e);
        const newImage: Image = {
          id: uuid,
          x,
          y,
          src: imageData[i].src,
        };
        setImages((prev) => [...prev, newImage]);

        i++;
        if (i >= imageData.length) i = 0;
      }
    }
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function removeImage(id: string) {
    setImages((prev) => prev.filter((img) => img.id !== id));
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {images.map((img) => (
        <AnimatedImage key={img.id} img={img} onComplete={() => removeImage(img.id)} />
      ))}
      <p className="text-3xl font-bold text-white uppercase mix-blend-difference">
        <span className="hidden md:block">(Move your mouse)</span>
        <span className="block md:hidden">(Touch and drag)</span>
      </p>
    </div>
  );
}

function AnimatedImage({ img, onComplete }: { img: Image; onComplete: () => void }) {
  useGSAP(() => {
    gsap.fromTo(
      `.${img.id}`,
      { scale: 0 },
      {
        scale: 1,
        duration: 0.3,
        onComplete: () => {
          setTimeout(() => {
            gsap.to(`.${img.id}`, {
              opacity: 0,
              scale: 0,
              duration: 0.3,
              onComplete: onComplete,
            });
          }, 700);
        },
      }
    );
  }, []);

  return (
    <div
      style={{ left: `${img.x}px`, top: `${img.y}px` }}
      className={`${img.id} fixed w-[max(20vw,20vh)] -translate-x-1/2 -translate-y-1/2`}
    >
      <Image
        className="h-full w-full object-cover"
        width={1920}
        height={1080}
        alt="image"
        src={img.src}
      />
    </div>
  );
}
