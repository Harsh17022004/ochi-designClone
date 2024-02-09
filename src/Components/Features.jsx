import React from "react";

function Features() {
  return (
    <div className="w-full h-screen bg-[#F1F1F1] py-16 mb-[5vw]">
      <div className="border-b-[1px] border-zinc-400 pb-10 px-10">
        <h1 className="text-5xl tracking-tight leading-none font-[montreal] ">
          Featured projects
        </h1>
      </div>
      <div className="cards w-full h-[30vw] flex gap-10 mt-16 px-10">
        <div className="relative card bg-red-400 w-full h-full rounded-xl ">
          <img
            className="h-full w-full object-cover rounded-xl"
            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
            alt=""
          />
        </div>
        <div className="relative card bg-red-400 w-full h-full rounded-xl ">
          <img
            className="h-full w-full object-cover rounded-xl"
            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
