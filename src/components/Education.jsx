import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Slider from 'react-slick';
import Button from '@material-ui/core/Button';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles/Education.css"

const certificates = [
  { id: 1, image: 'src/Certificates/AIFor everyone-1.png', title: 'Certificate Title 1' },
  { id: 2, image: 'src/Certificates/Algorithm-1.png', title: 'Certificate Title 1' },
  { id: 3, image: 'src/Certificates/Coursera DEZY5URZ3VP7-1.png', title: 'Certificate Title 1' },
  { id: 4, image: 'src/Certificates/ImageProcessing Project-1.png', title: 'Certificate Title 1' },
  { id: 5, image: 'src/Certificates/neuralNetwork-1.png', title: 'Certificate Title 1' },
  { id: 6, image: 'src/Certificates/Pythonbeginer-1.png', title: 'Certificate Title 1' },
  // ... more certificate objects with the path to their images
];


const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Academic Qualification</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <div className={`education-item ${styles.flexCenter} flex-col`}>
          <h2 className={`${styles.heading3}`}>University of Peradeniya</h2>
          <p className={`${styles.paragraph}`}>B.Sc (Hons) Computer Engineering (2019 - Present)</p>
          <p>CGPA: 3.50/4.00</p>
          <div> 
        My Transcript 👉 &nbsp; 	&nbsp;
            <a href="src/assets/resume/Nishankar_unofficial_interim_transcript.pdf" download="">
          <Button
              variant="contained"
              color="primary"
              component="a"
              download
              className="download-resume-button"
              style={{ cursor: 'pointer' }} // Custom cursor on hover
              >
          Download
              </Button>
              </a>
        </div>
        </div>
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <div className={`education-item ${styles.flexCenter} flex-col`}>
          <h2 className={`${styles.heading3}`}>Hartley College Point Pedro</h2>
          <p className={`${styles.paragraph}`}>GCE Advanced Level - Physical Sciences (2009 - 2017)</p>
          <p>Grades: Mathematics A, Chemistry A, Physics B</p>
        </div>
      </motion.p>

      <motion.div 
  variants={textVariant()}
  className="slider-container"
      >
        
  <h2 className={styles.sectionHeadText}>Certificates</h2>
  <Slider {...settings}>
    {certificates.map((certificate) => (
      <motion.div 
        key={certificate.id} 
        className="certificate-slide"
        variants={fadeIn('', '', 0.1, 1)}
      >
        <img src={certificate.image} alt={certificate.title} className="certificate-image" />
      </motion.div>
    ))}
  </Slider>
</motion.div>

      </>
  );
};

export default SectionWrapper(Education, "education");
 