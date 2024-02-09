import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      className="w-full py-[8vw] bg-emerald-800 rounded-tl-3xl rounded-tr-3xl overflow-x-hidden "
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
    >
      <div className="flex border-t-[1px] border-b-[1px] border-zinc-100 p-0">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="font-[founder] text-[25vw] whitespace-nowrap leading-[20vw] text-white mt-[-2vw] pr-[7vw] tracking-tight uppercase"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="font-[founder] text-[25vw] whitespace-nowrap leading-[20vw] text-white mt-[-2vw] pr-[7vw] tracking-tight uppercase"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="font-[founder] text-[25vw] whitespace-nowrap leading-[20vw] text-white mt-[-2vw] pr-[7vw] tracking-tight uppercase"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
