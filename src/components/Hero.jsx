
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React, { useState, useEffect } from 'react';
import "./styles/Hero.css";

const Hero = () => {

  const greetingText = "Hi👋, I'm Nishankar";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedText(greetingText.slice(0, index));
      if (!isDeleting && index === greetingText.length) {
        setIsDeleting(true);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
      setIndex(isDeleting ? index - 1 : index + 1);
    }, 300); // Adjust speed here

    return () => clearTimeout(timeout);
  }, [displayedText, index, isDeleting]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          <AnimatePresence>
            {displayedText.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {char}
              </motion.span>
            ))}
          </AnimatePresence>
          <span className="text-[#915EFF]"></span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a passionate Computer Engineering student 💻 <br className="sm:block hidden" />
            skilled in Data Science🧑‍🔬, Web Development🌐, and Cloud Computing☁️.
          </p>
          <div>
          <a 
            href="src\assets\resume\Nishankar_CV_New.pdf" // Update the path to your resume file
            download
            className="download-resume-button" // Add your button styles
          >
            My Resume
            </a>
            </div>
        </div>
      </div>
      
      <ComputersCanvas />

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
