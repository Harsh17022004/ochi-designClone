import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Marquee from "./Marquee";
import About from "./About";
import Eyes from "./Eyes";
import Features from "./Features";
import LocomotiveScroll from "locomotive-scroll";

function Web() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div
      className="min-h-screen w-full text-black bg-[#F1F1F1]"
      data-scroll-container
    >
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Features />
    </div>
  );
}

export default Web;
