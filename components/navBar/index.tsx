import React from "react";
import Image from "next/image";

export const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-default-100 border-4 border-black rounded-md p-2 max-w-screen-lg mx-auto shadow-pixelShadow">
      <div className="font-bold text-lg text-black">Ask me CAT</div>
      <div className=" flex flex-row items-center justify-between space-x-4">
        <a href="#" className="text-black hover:underline">
          About
        </a>
        <a href="#" className="text-black hover:underline">
          Legal
        </a>
        <a href="#" className="text-black hover:underline">
          GitHub
        </a>
        <div className="gap-2 text-black font-bold bg-white hover:shadow-pixelShadow border-black border-4 transition hover:-translate-x-1 hover:-translate-y-1 duration-300 ease-in-out flex items-center">
          <span className="border-black border-r-4">
            {" "}
            <Image src="/cog.svg" height={28} width={28} alt="cog icon" />
          </span>

          <a href="#" className="font-jetbrainsmono">
            Settings
          </a>
        </div>
      </div>
    </div>
  );
};
