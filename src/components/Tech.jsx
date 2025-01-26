import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { services } from "../constants"; // Ensure services array is populated with icons
const ServiceCard = ({ index, title, icons }) => {
  console.log(icons); // Check what icons are being passed

  return (
    <div className="w-full">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 flex flex-col items-center">
          <h3 className="text-white text-[20px] font-bold text-center mb-4">{title}</h3>

          <div className="w-full h-auto flex flex-wrap justify-center gap-6">
            {technologies.map((technology) => (
              <div
                key={technology.name}
                className="w-[100px] flex flex-col items-center"
              >
                <div className="w-[80px] h-[80px] flex justify-center items-center">
                  <BallCanvas icon={technology.icon} />
                </div>
                <p className="text-white text-center text-sm mt-2">{technology.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} title={service.title} icons={service.icons} />
      ))}


    </div>
  );
};

export default SectionWrapper(Tech, "");
