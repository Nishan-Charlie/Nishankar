import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import "./styles/about.css";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Button from '@material-ui/core/Button';
import "./styles/about.css";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

import { useState } from 'react';

const About = () => {
  const [webDevelopmentVisible, setWebDevelopmentVisible] = useState(false);
  const [dataScienceVisible, setDataScienceVisible] = useState(false);
  const [dataVisualizationVisible, setDataVisualizationVisible] = useState(false);
  const [cloudVisible, setCloudVisible] = useState(false);
  const [additionalSkillsVisible, setAdditionalSkillsVisible] = useState(false);

  const toggleWebDevelopment = () => setWebDevelopmentVisible(!webDevelopmentVisible);
  const toggleDataScience = () => setDataScienceVisible(!dataScienceVisible);
  const toggleDataVisualization = () => setDataVisualizationVisible(!dataVisualizationVisible);
  const toggleCloud = () => setCloudVisible(!cloudVisible);
  const toggleAdditionalSkills = () => setAdditionalSkillsVisible(!additionalSkillsVisible);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <div>
        I'm a passionate student and a Freelancer who thrives on learning new technologies.
        
        Check out my resume 👉 &nbsp; 	&nbsp;
            <a href="src/assets/resume/Nishankar_CV_New.pdf" download="">
          <Button
              variant="contained"
              color="primary"
              component="a"
              download
              className="download-resume-button"
              style={{ cursor: 'pointer' }} // Custom cursor on hover
              >
          My Resume
              </Button>
              </a>
        </div>
        <br></br>
        
        <h3 className={styles.sectionSubText}>
          🎓My expertise falls into these categories🧑‍💻:
          </h3>
      

<ul style={{ listStyleType: 'none' }}>
  <li>
    <span
      style={{ cursor: 'pointer' }}
              onClick={toggleWebDevelopment}
              
              className={`${webDevelopmentVisible ? 'hover-style-active' : 'hover-style'} skill-category`}
    >
      {webDevelopmentVisible ? '[-] ' : '[+] '} Web Development🌐:
    </span>
    {webDevelopmentVisible && (
      <div className="skill-grid">
        <div>React</div>
        <div>Angular</div>
        <div>Tailwind CSS</div>
        <div>Bootstrap</div>
        <div>Material UI</div>
        <div>AntDesign</div>
        <div>Node.js</div>
        <div>Django</div>
        <div>Flask</div>
        <div>Spring Boot</div>
      </div>
    )}
  </li>
  <li>
    <span
              style={{ cursor: 'pointer' }}
              onClick={toggleDataScience}
              className={`${ dataScienceVisible? 'hover-style-active': 'hover-style' } skill-category`}
    >
      {dataScienceVisible ? '[-] ' : '[+] '} Data Science🤖:
    </span>
    {dataScienceVisible && (
      <div className="skill-grid">
        <div>Data analytics</div>
        <div>Machine learning</div>
        <div>Deep learning</div>
                <div>TensorFlow</div>
                <div>PyTourch</div>
                <div>Matlab</div>
      </div>
    )}
  </li>
  <li>
    <span
      style={{ cursor: 'pointer' }}
      onClick={toggleDataVisualization}
      className={`${dataVisualizationVisible ? 'hover-style-active' : 'hover-style'} skill-category`}
    >
      {dataVisualizationVisible ? '[-] ' : '[+] '} Data Visualization📊:
    </span>
    {dataVisualizationVisible && (
      <div className="skill-grid">
        <div>PowerBI</div>
        <div>D3.js</div>
        <div>Matplotlib</div>
        <div>Seaborn</div>
      </div>
    )}
  </li>
  <li>
    <span
      style={{ cursor: 'pointer' }}
      onClick={toggleCloud}
      className={`${cloudVisible ? 'hover-style-active' : 'hover-style'} skill-category`}
    >
      {cloudVisible ? '[-] ' : '[+] '} Cloud☁️:
    </span>
    {cloudVisible && (
      <div className="skill-grid">
        <div>AWS S3</div>
        <div>AWS Lambda</div>
        <div>AWS Cognito</div>
        <div>AWS IAM</div>
        <div>DynamoDB</div>
        <div>AWS CloudFormation</div>
        <div>AWS Management Console</div>
        <div>AWS CICD Pipeline</div>
        <div>More AWS Services</div>
      </div>
    )}
  </li>
</ul>



        <br></br>
        I'm ready to leverage these skills to bring your ideas to life❗
        Check out my fiverr account 👉 &nbsp; 	&nbsp;
            <a href="" >
          <Button
              variant="contained"
              color='success'
              component="a"
              download
              className="download-resume-button"
              style={{ cursor: 'pointer' }} // Custom cursor on hover
              >
          Fiverr
              </Button>
              </a>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
