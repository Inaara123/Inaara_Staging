import React, { useState } from "react";
import { PopupButton } from 'react-calendly';
import AIImage from "../assets/bgImageSM.jpeg";
import Form from "./Form";


const Analytics = () => {
  

  return (
    <div className="w-full py-4 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold md:py-6 text-white text-center md:text-left">
            64% of Potential Earnings vanish due to unanswered calls
          </h1>
          <div className="col-lg-12 mx-auto">
            <p className="text-white mb-4 text-center md:text-left">
              With our hyper-personalized AI solutions, every customer inquiry receives immediate attention, safeguarding your revenue stream. Moreover, it streamlines operations, reducing costs and effortlessly manages schedules and tasks. Plus, it's a one-time investment that includes dedicated customer care, ensuring continuous support for your business needs.
            </p>
            <Form/>
           
          </div>
          {/*<div className="mt-8 flex justify-center">
            <PopupButton
              url="https://calendly.com/sabeel-rq4f"
              rootElement={document.getElementById('root')}
              text="Book my Free Appointment"
              className="bg-[#EC7F67] text-white rounded-md font-medium py-3 px-6"
            />
          </div>*/}
        </div>
        <div className="hidden md:flex justify-center">
          <img
            className="w-full max-w-[500px] rounded-xl"
            src={AIImage}
            alt="laptop logo"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Analytics;