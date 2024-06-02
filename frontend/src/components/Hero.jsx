import React from "react";
import { ReactTyped } from "react-typed";
const Hero = () => {
  return ( 
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH INAARA.AI</p>
        <h2 className="md:text-5xl sm:text-4xl text-2xl font-bold md:py-6">
        64% of potential earnings vanish due to unanswered calls
        </h2>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4">
          With our hyper-personalized AI solutions, every customer inquiry receives immediate attention, safeguarding your revenue stream. Moreover, it streamlines operations, reducing costs and effortlessly manages schedules and tasks. Plus, it's a one-time investment that includes dedicated customer care, ensuring continuous support for your business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
