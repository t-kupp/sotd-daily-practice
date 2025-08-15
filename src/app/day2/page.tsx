"use client";

export default function Page() {
  return (
    <div className="font-manrope flex h-full w-full items-center justify-center bg-[#160f08] text-white">
      <button className="group px-8 py-10">
        <div className="relative rounded-full border border-[#896242] px-4.5 py-3 font-bold uppercase transition-[padding] duration-500 ease-out group-hover:px-7 group-hover:py-4">
          Restart experience
          <span className="absolute top-0 left-0 h-full w-full translate-y-[2px] rotate-2 rounded-full border border-[#896242]/40"></span>
        </div>
      </button>
    </div>
  );
}
