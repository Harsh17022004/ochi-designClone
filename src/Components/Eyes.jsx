import React, { useEffect, useState } from "react";

export default function Eyes() {
  let [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
      setRotate(180 - angle);
    });
  });

  return (
    <div className="w-full h-screen bg-zinc-100 overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center "
      >
        <div className="flex gap-7 absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] ">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="relative w-2/3 h-2/3 bg-zinc-950 rounded-full ">
              <div
                style={{
                  transform: `translate(-50%, -50% ) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-8 "
              >
                <div className="w-8 h-8 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="relative w-2/3 h-2/3 bg-zinc-950 rounded-full ">
              <div
                style={{
                  transform: `translate(-50%, -50% ) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-8 "
              >
                <div className="w-8 h-8 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
