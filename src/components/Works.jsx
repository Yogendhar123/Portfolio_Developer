import React from "react";
import Tilty from "react-tilty";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { Pesonalprojects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilty
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        {/* <div className='relative w-full h-[230px]' onClick={() => window.open(source_code_link, "_blank")} style={{ cursor: "pointer", background: "white", borderRadius: "8px" }}> */}
        {/* <img
            src={image}
            alt='project_image'
            className='w-full h-full  rounded-2xl'
          /> */}

        {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div> */}
        {/* </div> */}

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilty>
    </motion.div>
  );
};

const ProjectCardPersonal = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilty
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        {/* <div className='relative w-full h-[230px]' onClick={() => window.open(source_code_link, "_blank")} style={{ cursor: "pointer", background: "white", borderRadius: "8px" }}> */}
        <a href={source_code_link}>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full  rounded-2xl'
          /></a>

        {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div> */}
        {/* </div> */}

        <div className='mt-5'>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <a href={source_code_link}>
              <button style={{ color: '#c8c8c8' }}>View</button>
            </a>

          </div>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilty>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Project's   </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase, highlighting my expertise through real-world examples of my work. Each project has been developed using React and Angular technologies, tailored to meet customer requirements. The showcase reflects my ability to solve complex problems, adapt to diverse technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div style={{ fontSize: "22px", marginTop: "10px" }}> Company Projects </div>
      <div className='mt-10 flex flex-wrap gap-7'>

        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div style={{ fontSize: "22px", marginTop: "10px" }}> Pesonal Projects </div>
      <div className='mt-10 flex flex-wrap gap-7'>

        {Pesonalprojects.map((project, index) => (
          <ProjectCardPersonal key={`project-${index}`} index={index} {...project} />
        ))}
      </div>




    </>
  );
};

export default SectionWrapper(Works, "");
