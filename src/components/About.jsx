import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants"; // Ensure services array is populated with icons
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets"; // Ensure icons are correctly imported



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with over 3 years of experience in UI development, specializing in JavaScript and TypeScript. I have expertise in frameworks such as React js, and Angular. Additionally, I have expanded my skill set by learning and working with Node.js, Express, and MongoDB.<br /> I am a quick learner and collaborate closely with clients to develop efficient, scalable, and user-friendly solutions that address real-world challenges.
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} title={service.title} icons={service.icons} />
        ))}
      </div> */}

    </>
  );
};

export default SectionWrapper(About, "about");
