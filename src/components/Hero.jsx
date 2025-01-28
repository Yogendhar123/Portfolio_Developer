import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { githubLOgo, linkIN } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Yogendhar Sri Ram</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop responsive UIs and web applications using React js and
            Angular, ensuring seamless experiences across devices. With over 3
            years of experience, I deliver efficient, scalable solutions that
            meet client needs
          </p>

          <div
            style={{
              display: "flex",
              alignContent: "center",
              gap: "12px",
              marginTop: "35px",
            }}
          >
            <div>
              <img
                src={githubLOgo}
                alt=""
                style={{
                  height: "35px",
                  width: "35px",
                  cursor: "pointer",
                  borderRadius: "50%",
                  background: "white", // Initial background color
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease", // Smooth transition
                  boxShadow: "0px 35px 120px -15px #211e35", // Initial shadow
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)"; // Zoom effect on hover
                  e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)"; // Box shadow on hover
                  e.target.style.background =
                    "-webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%)"; // Gradient on hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)"; // Reset zoom effect
                  e.target.style.boxShadow = "0px 35px 120px -15px #211e35"; // Reset shadow to initial
                  e.target.style.background = "white"; // Reset background to white
                }}
                onClick={() => {
                  window.open(" https://github.com/Yogendhar123 ", "_blank"); // Open the link in a new tab
                  // window.location.href = "https://github.com/Yogendhar123"
                }}
              />
            </div>

            <div>
              <img
                src={linkIN}
                alt=""
                style={{
                  height: "35px",
                  width: "35px",
                  cursor: "pointer",
                  borderRadius: "50%",
                  background: "white", // Initial background color
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease", // Smooth transition
                  boxShadow: "0px 35px 120px -15px #211e35", // Initial shadow
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)"; // Zoom effect on hover
                  e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)"; // Box shadow on hover
                  e.target.style.background =
                    "-webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%)"; // Gradient on hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)"; // Reset zoom effect
                  e.target.style.boxShadow = "0px 35px 120px -15px #211e35"; // Reset shadow to initial
                  e.target.style.background = "white"; // Reset background to white
                }}
                onClick={() => {
                  window.open(
                    " https://in.linkedin.com/in/yogendhar ",
                    "_blank"
                  );
                  // window.location.href = "https://in.linkedin.com/in/yogendhar"
                }}
              />
            </div>
          </div>
          <button
            className="download-btn"
            style={{
              marginTop: "20px",
              border: "1px solid gray",
              padding: "5px 10px",
              borderRadius: "6px",
              transition:
                "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease", // Smooth transition
              boxShadow: "0px 35px 120px -15px #211e35", // Initial shadow
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)"; // Zoom effect on hover
              e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)"; // Box shadow on hover
              e.target.style.background =
                "-webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%)"; // Gradient on hover
              e.target.style.color ="black"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)"; // Reset zoom effect
              e.target.style.boxShadow = "0px 35px 120px -15px #211e35"; // Reset shadow to initial
              e.target.style.background = "none"; // Reset background to white
              e.target.style.color ="white"
              

            }}
          >
            <a
              href="/Yogendhar_resume.pdf"
              download="YogendharResume.pdf"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
