import React from "react";

function About() {
  return (
    <div
      className="w-full pt-[8vw] px-10 bg-[#CDEA68] text-black font-[montreal] "
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      data-scroll-delay="1"
    >
      <h1 className="text-[4vw] leading-[4.3vw] tracking-tight ">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="flex w-full border-t-[1px] border-[#a1b852] mt-10 py-5">
        <div className="w-1/2 ">
          <h1 className="text-5xl">Our approach:</h1>
          <button className="flex gap-3 items-center justify-evenly py-4 w-40 mt-5 bg-zinc-900 rounded-full text-white uppercase text-sm ">
            Read more
            <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="w-1/2 bg-pink-300 h-[30vw] rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About;
