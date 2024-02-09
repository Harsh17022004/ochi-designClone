import React from "react";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div
      className="w-full h-screen bg-[#F1F1F1] pt-1"
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
    >
      <div className="testStructure mt-32 px-20">
        {["we create", "eye opening", "presentations"].map((item, idx) => (
          <div
            key={idx}
            className="masker text-[9.5vw] uppercase leading-[7.5vw] tracking-normal font-[founder]"
          >
            <div className="w-fit flex items-center">
              {idx === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9.5vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[9.5vw] h-[6vw] relative top-[.5vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-center mr-[1vw] rounded-md"
                ></motion.div>
              )}
              <h1>{item}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-24"></div>
      <div className="flex justify-between px-10 py-4 font-[montreal]">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, idx) => (
          <p className="text-base " key={idx}>
            {item}
          </p>
        ))}
        <div className="flex justify-center gap-1 items-center">
          <div className="border-[1px] border-zinc-700 uppercase text-sm px-3 py-1 rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex justify-center items-center rounded-full border-[1px] border-zinc-700 tracking-tighter leading-none  -rotate-45 font-thin">
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
